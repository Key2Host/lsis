const express = require('express');
const { getServer, getServerInfo, getIncidents, getPlannedMaintenance, postContact } = require('../controllers/public.controller');

const router = express.Router();

// Öffentliche Status-Route
router.get('/status', getServer);
router.get('/status/:id', getServerInfo);
router.get('/status/:id/incidents', getIncidents);
router.get('/status/:id/plannedMaintenance', getPlannedMaintenance);
router.post('/contact' , postContact)

module.exports = router;