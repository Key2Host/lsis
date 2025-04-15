const express = require('express');
const { login, signup, recover, logout, checkID } = require('../controllers/auth.controller');

const router = express.Router();

// Login-Route für Authentifizierung (JWT-Token)
router.post('/login', login);
router.post('/signup', signup);
router.post('/recover', recover);
router.post('/checkid', checkID)
router.post('/logout', logout);

module.exports = router;