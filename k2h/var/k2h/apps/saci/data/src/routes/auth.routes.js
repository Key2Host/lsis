const express = require('express');
const { authenticateUser } = require('../middlewares/auth.middleware');
const { checkID } = require('../controllers/auth/checkID');
const { hello } = require('../controllers/auth/hello');
const { login } = require('../controllers/auth/login');
const { logout } = require('../controllers/auth/logout');
const { recover } = require('../controllers/auth/recover');
const { signup } = require('../controllers/auth/signup');
const { refresh } = require('../controllers/auth/refresh');
const router = express.Router();

router.post('/checkid', authenticateUser, checkID);
router.get('/hello', authenticateUser, hello);
router.post('/login', login);
router.post('/logout', authenticateUser, logout);
router.post('/recover', recover)
router.post('/refresh', refresh);
router.post('/signup', signup);

module.exports = router;