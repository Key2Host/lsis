const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');
const { JWT_SECRET } = require('../config/jwt.config');

function authenticateUser(req, res, next) {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ error: 'Nicht eingeloggt' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Access Token ungültig' });
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