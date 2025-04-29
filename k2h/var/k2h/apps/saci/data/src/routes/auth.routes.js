const express = require('express');
const { authenticateUser } = require('../middlewares/auth.middleware');
const { login, signup, recover, logout, checkID, refresh } = require('../controllers/auth.controller');

const router = express.Router();

// Login-Route für Authentifizierung (JWT-Token)
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/signup', signup);
router.post('/recover', recover);
router.post('/checkid', authenticateUser, checkID)
router.post('/logout', logout);

module.exports = router;