const { User, UserEmail } = require('../../models/user.model');
const { RefreshTokens } = require('../../models/auth.model');
const argon2 = require('argon2');  // argon2 importieren
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION, JWT_REFRESH_EXPIRATION } = require('../../config/jwt.config');
const { log } = require('../../utils/logger');

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;

        try {
            // Nutzer-ID anhand der E-Mail in "users_mails" finden
            const emailEntry = await UserEmail.findOne({ where: { email } });
            if (!emailEntry) {
                return res.status(401).json({ error: 'Ungültige Anmeldedaten' });
            }

            // Nutzer in "users" anhand der gefundenen ID suchen
            const user = await User.findOne({ where: { id: emailEntry.user } });
            if (!user) {
                return res.status(401).json({ error: 'Ungültige Anmeldedaten' });
            }

            // Passwort mit argon2 vergleichen
            const isMatch = await argon2.verify(user.password, password);  // Verwende argon2.verify statt bcrypt.compare
            if (!isMatch) {
                return res.status(401).json({ error: 'Ungültige Anmeldedaten' });
            }

            // JWT generieren
            const accessToken = jwt.sign(
                { id: user.id, customerID: user.customerID, firstname: user.firstname, lastname: user.lastname, email: user.email },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRATION }  // Kurze Lebensdauer (z. B. 15 Minuten)
            );

            const refreshToken = jwt.sign(
                { id: user.id, customerID: user.customerID, firstname: user.firstname, lastname: user.lastname, email: user.email },
                JWT_SECRET,
                { expiresIn: JWT_REFRESH_EXPIRATION }  // Lange Lebensdauer (z. B. 7 Tage)
            );

            try {
                await RefreshTokens.create({
                    user: user.id,
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

                res.status(200).json({ success: true });

            } catch (err) {
                log('Fehler beim Speichern des Refresh Tokens:', err);
                res.status(500).json({ error: 'Fehler beim Speichern des Refresh Tokens' });
            }
        } catch (err) {
            log(err);
            res.status(500).json({ error: 'Serverfehler' });
        }
    }
};