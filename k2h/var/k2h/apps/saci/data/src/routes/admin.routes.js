const express = require('express');
const { authenticateAdmin } = require('../middlewares/auth.middleware');
const { adminDashboard } = require('../controllers/admin.controller');

const router = express.Router();

// Admin-Dashboard Route (Nur für Admins zugänglich)
router.get('/dashboard', authenticateAdmin, adminDashboard);

module.exports = router;