const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');
const { RefreshTokens } = require('../models/auth.model');
const { log } = require('../../src/utils/logger');
const { JWT_SECRET, JWT_EXPIRATION, JWT_REFRESH_EXPIRATION } = require('../config/jwt.config');

async function authenticateUser(req, res, next) {
  try {
    const token = req.cookies.accessToken;

    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        return next();
      } catch (err) {
        console.log("Access Token ungültig:", err.message);
      }
    }

    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ error: "Keine gültige Sitzung. Bitte erneut anmelden." });
    }

    try {
      const decoded = jwt.verify(refreshToken, JWT_SECRET);
      const existingToken = await RefreshTokens.findOne({ where: { token: refreshToken } });
      if (!existingToken) {
        return res.status(401).json({ error: "Ungültiger Refresh Token" });
      }

      const newRefreshToken = jwt.sign(
        { id: decoded.id, customerID: decoded.customerID },
        JWT_SECRET,
        { expiresIn: JWT_REFRESH_EXPIRATION }
      );

      const newAccessToken = jwt.sign(
        { id: decoded.id, customerID: decoded.customerID },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
      );

      await RefreshTokens.destroy({ where: { token: refreshToken } });
      await RefreshTokens.create({ user: decoded.id, token: newRefreshToken });

      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,        // Sicherstellen, dass `httpOnly` gesetzt ist
        secure: true, // Setze es nur in der Produktion auf `true`
        sameSite: "None",      // CORS-freundlich
        path: "/"              // Gilt für die gesamte Website
      });

      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,        // Sicherstellen, dass `httpOnly` gesetzt ist
        secure: true, // Setze es nur in der Produktion auf `true`
        sameSite: "None",      // CORS-freundlich
        path: "/"              // Gilt für die gesamte Website
      });

      req.user = decoded;
      res.status(200).json({ accessToken, refreshToken });

    } catch (err) {
      console.error("Refresh Token ungültig:", err.message);
      return res.status(401).json({ error: "Ungültiges Refresh Token oder Token abgelaufen" });
    }

  } catch (err) {
    console.error("Fehler bei der Authentifizierung:", err.message);
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