const { User, UserEmail, UserPhone } = require('../../models/user.model');
const { RefreshTokens } = require('../../models/auth.model');
const argon2 = require('argon2');  // argon2 importieren
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION, JWT_REFRESH_EXPIRATION } = require('../../config/jwt.config');
const { log } = require('../../utils/logger');
const { Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async signup(req, res) {
        try {
            const {
                firstname,
                lastname,
                password,
                sex,
                birthday,
                street,
                postalcode,
                city,
                state,
                country,
                email,
                phone
            } = req.body;

            if (!firstname || !lastname || !password || !sex || !birthday || !street || !postalcode || !city || !state || !country || !email || !phone) {
                return res.status(400).json({ message: 'Alle Felder müssen ausgefüllt werden!' });
            }

            // CHECK OB EMAIL BEREITS EXISTIERT
            const emailEntry = await UserEmail.findOne({ where: { email } });
            if (emailEntry) {
                return res.status(409).json({ error: 'E-Mail Adresse wird bereits verwendet.' });
            }

            const phoneEntry = await UserPhone.findOne({ where: { number: phone } });
            if (phoneEntry) {
                return res.status(409).json({ error: 'Telefonnummer wird bereits verwendet.' });
            }

            const customerID = await generateCustomerID();

            // Passwort mit Argon2 hashen
            const hashedPassword = await argon2.hash(password);

            const stripeCustomer = await stripe.customers.create({
                name: `${firstname} ${lastname}`,
                email: email,
                phone: phone,
                address: {
                    line1: street,
                    postal_code: postalcode,
                    city: city,
                    state: state,
                    country: country
                }
            });

            // Benutzer erstellen
            const newUser = await User.create({
                customerID: customerID,
                password: hashedPassword,
                firstname,
                lastname,
                sex,
                birthday,
                street,
                postalcode,
                city,
                state,
                country,
                stripeCustomerId: stripeCustomer.id
            });

            // E-Mail-Eintrag
            await UserEmail.create({
                user: newUser.id,
                email: email,
                is_primary: 1,
                verified: 0
            });

            // Telefonnummer-Eintrag
            await UserPhone.create({
                user: newUser.id,
                number: phone,
                is_primary: 1,
                verified: 0
            });

            // JWT generieren
            const accessToken = jwt.sign(
                { id: newUser.id, customerID: newUser.customerID, firstname: newUser.firstname, lastname: newUser.lastname, email: newUser.email },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRATION }  // Kurze Lebensdauer (z. B. 15 Minuten)
            );

            const refreshToken = jwt.sign(
                { id: newUser.id, customerID: newUser.customerID, firstname: newUser.firstname, lastname: newUser.lastname, email: newUser.email },
                JWT_SECRET,
                { expiresIn: JWT_REFRESH_EXPIRATION }  // Lange Lebensdauer (z. B. 7 Tage)
            );

            try {
                await RefreshTokens.create({
                    user: newUser.id,
                    token: refreshToken
                });

                res.cookie("accessToken", accessToken, {
                    httpOnly: true,        // Sicherstellen, dass `httpOnly` gesetzt ist
                    secure: true, // Setze es nur in der Produktion auf `true`
                    sameSite: "None",      // CORS-freundlich
                    path: "/",              // Gilt für die gesamte Website
                    domain: ".key2host.com"
                });

                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,        // Sicherstellen, dass `httpOnly` gesetzt ist
                    secure: true, // Setze es nur in der Produktion auf `true`
                    sameSite: "None",      // CORS-freundlich
                    path: "/",              // Gilt für die gesamte Website
                    domain: ".key2host.com"
                });

                res.status(201).json({ success: true });

            } catch (err) {
                log('Fehler beim Speichern des Refresh Tokens:', err);
                res.status(500).json({ error: 'Fehler beim Speichern des Refresh Tokens' });
            }
        } catch (err) {
            log('❌ Fehler beim Erstellen des Benutzers:', err);
            res.status(500).json({ message: 'Fehler beim Erstellen des Benutzers' });
        }
    }
};

async function generateCustomerID() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let customerID;
    let exists;

    do {
        customerID = 'k2h-' + Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
        exists = await User.findOne({ where: { customerID } });
    } while (exists);

    return customerID;
}