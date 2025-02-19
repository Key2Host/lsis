const express = require('express');
const { authenticateUser, checkSuspended } = require('../middlewares/auth.middleware');
const { userHello, getWebspaceInfo, getDomainInfo, buy } = require('../controllers/user.controller');

const router = express.Router();

// Geschützte Route: Gibt "Hallo" zurück, wenn der User authentifiziert ist
router.get('/hello', authenticateUser, userHello);
router.get('/getWebspaceInfo', getWebspaceInfo);
router.get('/getDomainInfo', getDomainInfo);
router.post('/buy', authenticateUser, checkSuspended, buy);

module.exports = router;