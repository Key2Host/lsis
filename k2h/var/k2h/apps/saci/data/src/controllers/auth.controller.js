const { User, UserEmail, UserPhone } = require('../models/user.model');
const { RefreshTokens } = require('../models/auth.model');
const argon2 = require('argon2');  // argon2 importieren
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { JWT_SECRET, JWT_EXPIRATION, JWT_REFRESH_EXPIRATION } = require('../config/jwt.config');
const { log } = require('../utils/logger');
const { Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function login(req, res) {
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
        secure: process.env.NODE_ENV === "production", // Setze es nur in der Produktion auf `true`
        sameSite: "None",      // CORS-freundlich
        path: "/"              // Gilt für die gesamte Website
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,        // Sicherstellen, dass `httpOnly` gesetzt ist
        secure: process.env.NODE_ENV === "production", // Setze es nur in der Produktion auf `true`
        sameSite: "None",      // CORS-freundlich
        path: "/"              // Gilt für die gesamte Website
      });

      res.status(200).json({ accessToken, refreshToken });

    } catch (err) {
      log('Fehler beim Speichern des Refresh Tokens:', err);
      res.status(500).json({ error: 'Fehler beim Speichern des Refresh Tokens' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ error: 'Serverfehler' });
  }
}

async function generateCustomerID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let customerID;
  let exists;

  do {
    customerID = 'k2h-' + Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    exists = await User.findOne({ where: { customerID } });
  } while (exists);

  return customerID;
}

async function signup(req, res) {
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

    res.status(201).json({
      message: 'Benutzer erfolgreich erstellt',
      user: {
        id: newUser.id,
        customerID: newUser.customerID,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        city: newUser.city,
        country: newUser.country,
        email: email
      }
    });
  } catch (err) {
    log('❌ Fehler beim Erstellen des Benutzers:', err);
    res.status(500).json({ message: 'Fehler beim Erstellen des Benutzers' });
  }
}

// Funktion zum Versenden der E-Mail
async function sendPasswordResetEmail(user, token) {
  const transporter = nodemailer.createTransport({
    // Direktes Senden ohne SMTP-Server
    sendmail: true,
    path: '/usr/sbin/sendmail', // Für Unix-basierte Systeme (z.B. Linux, macOS)
  });

  const resetLink = `http://deine-website.com/reset-password?token=${token}`;

  const mailOptions = {
    from: 'no-reply@key2host.com',
    to: "info@key2host.com",
    subject: 'Passwort zurücksetzen',
    text: `Klicke auf den folgenden Link, um dein Passwort zurückzusetzen: ${resetLink}`,
  };

  await transporter.sendMail(mailOptions);
}

async function recover(req, res) {
  const { email } = req.body;

  // Überprüfen, ob eine E-Mail im Body angegeben wurde
  if (!email) {
    return res.status(400).json({ message: 'E-Mail-Adresse muss angegeben werden!' });
  }

  try {
    // Überprüfen, ob die E-Mail in der Benutzerdatenbank existiert und primär ist
    const userEmail = await UserEmail.findOne({
      where: { email, is_primary: 1 }, // Suche nach einer primären E-Mail-Adresse
    });

    if (!userEmail) {
      return res.status(400).json({ message: 'E-Mail-Adresse nicht gefunden oder ist nicht die primäre E-Mail!' });
    }

    // E-Mail mit dem Link zum Zurücksetzen des Passworts senden
    await sendPasswordResetEmail(userEmail, "123");

    res.status(200).json({
      message: 'Ein Link zum Zurücksetzen des Passworts wurde an deine E-Mail-Adresse gesendet.',
    });
  } catch (err) {
    log('❌ Fehler beim Senden der Passwort-Zurücksetzung:', err);
    res.status(500).json({ message: 'Fehler beim Senden der E-Mail' });
  }
}

async function logout(req, res) {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ error: 'Kein Refresh Token bereitgestellt' });
  }

  try {
    // Token in der Datenbank suchen und löschen
    const refreshTokenDB = await RefreshTokens.findOne({ where: { token: refreshToken } });

    if (!refreshTokenDB) {
      return res.status(404).json({ error: 'Token nicht gefunden' });
    }

    await refreshTokenDB.destroy();

    res.status(200).json({ message: 'Erfolgreich ausgeloggt' });

  } catch (err) {
    log(err);
    res.status(500).json({ error: 'Serverfehler beim Logout' });
  }
}

module.exports = { login, signup, recover, logout };