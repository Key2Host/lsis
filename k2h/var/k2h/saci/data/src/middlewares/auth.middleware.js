const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');
const { RefreshTokens } = require('../models/auth.model');
const { log } = require('../../src/utils/logger');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/jwt.config');

async function authenticateUser(req, res, next) {
  try {
    // Holen des Access Tokens aus den Cookies
    const token = req.cookies.accessToken;

    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        return next();
      } catch (err) {
        console.log("Access Token ungültig oder abgelaufen.");
      }
    }

    // Falls kein oder ein ungültiges Access Token vorliegt, prüfen wir das Refresh Token
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ error: "Keine gültige Sitzung. Bitte erneut anmelden." });
    }

    try {
      // Überprüfen, ob das Refresh Token gültig ist
      const decoded = jwt.verify(refreshToken, JWT_SECRET);

      // Prüfen, ob das Refresh Token in der Datenbank existiert
      const existingToken = await RefreshTokens.findOne({ where: { token: refreshToken } });
      if (!existingToken) {
        return res.status(401).json({ error: "Ungültiger Refresh Token" });
      }

      // **Restlaufzeit des alten Refresh Tokens berechnen**
      const now = Math.floor(Date.now() / 1000); // Zeit in Sekunden
      const remainingTime = decoded.exp - now; // Restzeit des alten Tokens

      if (remainingTime <= 0) {
        return res.status(401).json({ error: "Refresh Token ist abgelaufen" });
      }

      // Neuer Refresh Token mit der gleichen Ablaufzeit wie der alte
      const newRefreshToken = jwt.sign(
        { id: decoded.id, username: decoded.username },
        JWT_SECRET,
        { expiresIn: remainingTime } // **Restlaufzeit übernehmen!**
      );

      // Neues Access Token erstellen
      const newAccessToken = jwt.sign(
        { id: decoded.id, username: decoded.username },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION } // Normale kurze Lebensdauer
      );

      // Altes Refresh Token löschen & Neues speichern
      await RefreshTokens.destroy({ where: { token: refreshToken } });
      await RefreshTokens.create({ user: decoded.id, token: newRefreshToken });

      // Neue Tokens als Cookies setzen
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
        path: "/",
      });

      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
        path: "/",
      });

      req.user = decoded;
      return next();

    } catch (err) {
      console.error("Refresh Token ungültig:", err);
      return res.status(401).json({ error: "Ungültiges Refresh Token oder Token abgelaufen" });
    }
  } catch (err) {
    console.error("Fehler bei der Authentifizierung:", err);
    return res.status(500).json({ error: "Interner Serverfehler" });
  }
}

function authenticateAdmin(req, res, next) {
  authenticateUser(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    next();
  });
}

async function checkSuspended(req, res, next) {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(401).json({ error: 'Kein Token gefunden' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: 'User nicht gefunden' });

    if (user.suspended === 1) {
      return res.status(403).json({ error: 'Dein Konto wurde gesperrt. Bitte kontaktiere den Support.' });
    }

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token ist abgelaufen. Bitte melde dich erneut an.' });
    }

    console.error('Fehler bei der Überprüfung des Sperrstatus:', err);
    res.status(500).json({ error: 'Serverfehler' });
  }
}

module.exports = { authenticateUser, authenticateAdmin, checkSuspended };