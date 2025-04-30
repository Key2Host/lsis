const express = require('express');
const { getStatus, getStatusByID } = require('../controllers/status/status');
const { getStatusIncidentsByID } = require('../controllers/status/incidents');
const { getStatusPlannedMaintenanceByID } = require('../controllers/status/maintenance');
const router = express.Router();

//router.get('/status', getStatus);
//router.get('/status/:id', getStatusByID);
//router.get('/status/:id/incidents', getStatusIncidentsByID);
//router.get('/status/:id/plannedMaintenance', getStatusPlannedMaintenanceByID);

module.exports = router;