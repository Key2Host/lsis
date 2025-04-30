const express = require('express');
const { authenticateUser, checkSuspended } = require('../middlewares/auth.middleware');
const { getUser, patchUser } = require('../controllers/user/user');
const { deleteUser } = require('../controllers/user/delete');

const router = express.Router();

// Geschützte Route: Gibt "Hallo" zurück, wenn der User authentifiziert ist
router.get('/user', authenticateUser, getUser);
router.patch('/user', authenticateUser, patchUser);
router.patch('/user/delete', authenticateUser, checkSuspended, deleteUser);

module.exports = router;