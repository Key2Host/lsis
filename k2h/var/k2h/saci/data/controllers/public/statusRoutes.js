const express = require('express');

var app = module.exports = express.Router();
let serverData = [
    {
        name: "FFM [GER]",
        coords: [50.1109, 8.6821],
        state: 3,
        stats: {
            "-20": 99.8,
            "-19": 99.8,
            "-18": 99.8,
            "-17": 99.8,
            "-16": 99.8,
            "-15": 99.8,
            "-14": 99.8,
            "-13": 99.8,
            "-12": 99.8,
            "-11": 99.8,
            "-10": 99.8,
            "-9": 99.8,
            "-8": 99.8,
            "-7": 99.8,
            "-6": 99.8,
            "-5": 99.8,
            "-4": 99.8,
            "-3": 99.8,
            "-2": 99.8,
            "-1": 99.8
        },
        incidents: {
            "01-01-2020": {
                title: "SSD Tausch",
                type: 3,
                message: "..."
            },
            "10-01-2020": {
                title: "Uplink absturz",
                type: 1,
                message: ""
            }
        },
        plannedMaintenance: {},
        lastcheck: 1722905497
    },
    {
        name: "HKI [FIN]",
        coords: [60.1756, 24.9342],
        state: 0,
        stats: {
            "-20": 0.00,
            "-19": 0.00,
            "-18": 0.00,
            "-17": 0.00,
            "-16": 0.00,
            "-15": 0.00,
            "-14": 0.00,
            "-13": 0.00,
            "-12": 0.00,
            "-11": 0.00,
            "-10": 0.00,
            "-9": 0.00,
            "-8": 0.00,
            "-7": 0.00,
            "-6": 0.00,
            "-5": 0.00,
            "-4": 0.00,
            "-3": 0.00,
            "-2": 0.00,
            "-1": 0.00
        },
        incidents: {},
        plannedMaintenance: {
            "Permanent": {
                title: "Einrichtung der Infrastruktur",
                message: "Der Server wird aktuell noch gebaut, geliefert und eingerichtet. Dies kann noch lange dauern."
            }
        },
        lastcheck: 1722905497
    },
    {
        name: "LA [USA]",
        coords: [34.1139, -118.4068],
        state: 0,
        stats: {
            "-20": 0.00,
            "-19": 0.00,
            "-18": 0.00,
            "-17": 0.00,
            "-16": 0.00,
            "-15": 0.00,
            "-14": 0.00,
            "-13": 0.00,
            "-12": 0.00,
            "-11": 0.00,
            "-10": 0.00,
            "-9": 0.00,
            "-8": 0.00,
            "-7": 0.00,
            "-6": 0.00,
            "-5": 0.00,
            "-4": 0.00,
            "-3": 0.00,
            "-2": 0.00,
            "-1": 0.00
        },
        incidents: {},
        plannedMaintenance: {
            "Permanent": {
                title: "Einrichtung der Infrastruktur",
                message: "Der Server wird aktuell noch gebaut, geliefert und eingerichtet. Dies kann noch lange dauern."
            }
        },
        lastcheck: 1722905497
    },
    {
        name: "YUL [CAN]",
        coords: [45.5089, -73.5617],
        state: 0,
        stats: {
            "-20": 0.00,
            "-19": 0.00,
            "-18": 0.00,
            "-17": 0.00,
            "-16": 0.00,
            "-15": 0.00,
            "-14": 0.00,
            "-13": 0.00,
            "-12": 0.00,
            "-11": 0.00,
            "-10": 0.00,
            "-9": 0.00,
            "-8": 0.00,
            "-7": 0.00,
            "-6": 0.00,
            "-5": 0.00,
            "-4": 0.00,
            "-3": 0.00,
            "-2": 0.00,
            "-1": 0.00
        },
        incidents: {},
        plannedMaintenance: {
            "Permanent": {
                title: "Einrichtung der Infrastruktur",
                message: "Der Server wird aktuell noch gebaut, geliefert und eingerichtet. Dies kann noch lange dauern."
            }
        },
        lastcheck: 1722905497
    }
];

// Middleware zum Überprüfen der Server-ID und zum Abrufen der Serverdaten
const getServerById = (req, res, next) => {
    const serverId = parseInt(req.params.id, 10);
    const server = serverData[serverId];
    if (!server) {
        return res.status(404).json({ message: "Server not found" });
    }
    req.server = server;
    next();
};

// GET-Endpunkt, um alle Serverdaten abzurufen
app.get('/', (req, res) => {
    res.json(serverData);
});

// GET-Endpunkt, um die Daten von Server mit id abzurufen
app.get('/:id', getServerById, (req, res) => {
    res.json(req.server);
});

// GET-Endpunkt, um die Incidents von Server mit id abzurufen
app.get('/:id/incidents', getServerById, (req, res) => {
    const data = req.server.incidents;
    if (!data || Object.keys(data).length === 0) {
        return res.status(404).json({ message: "This server has no incidents" });
    }
    res.json(data);
});

// GET-Endpunkt, um die geplanten Wartungsarbeiten von Server mit id abzurufen
app.get('/:id/plannedMaintenance', getServerById, (req, res) => {
    const data = req.server.plannedMaintenance;
    if (!data || Object.keys(data).length === 0) {
        return res.status(404).json({ message: "This server has no planned maintenance" });
    }
    res.json(data);
});

// POST-Endpunkt, um die Serverdaten zu aktualisieren
app.post('/', (req, res) => {

    const { name, coords, state, stats, incidents, plannedMaintenance, lastcheck } = req.body;

    // Prüfe, ob alle erforderlichen Daten vorhanden sind
    if (!name || !coords || !state || !stats || !lastcheck) {
        return res.status(400).json({ message: "Fehlende Daten im Anfragetext" });
    }
    
    
    // Neue Serverdaten hinzufügen
    serverData.push({
        name,
        coords,
        state,
        stats,
        incidents,
        plannedMaintenance,
        lastcheck
    });

    res.json({ message: "Serverdaten erfolgreich hinzugefügt"});
});

// DELETE-Endpunkt, um alle Server zu löschen
app.delete('/', (req, res) => {
    // Leere das serverData-Array
    serverData = [];

    res.json({ message: "All servers have been deleted" });
});

// DELETE-Endpunkt, um einen Server mit der angegebenen ID zu löschen
app.delete('/:id', (req, res) => {
    const serverId = parseInt(req.params.id, 10);
    const server = serverData[serverId];

    if (!server) {
        return res.status(404).json({ message: "Server not found" });
    }

    // Server aus dem Array entfernen
    serverData.splice(serverId, 1);

    res.json({ message: `Server with ID ${serverId} has been removed` });
});

// PATCH-Endpunkt, um bestimmte Felder aller Server zu aktualisieren
app.patch('/', (req, res) => {
    const updatedFields = req.body;

    if (!updatedFields || Object.keys(updatedFields).length === 0) {
        return res.status(400).json({ message: "No data provided to update" });
    }

    // Alle Serverdaten mit den neuen Feldern aktualisieren
    serverData = serverData.map(server => {
        return { ...server, ...updatedFields };
    });

    res.json({ message: "All servers have been updated", servers: serverData });
});

// PATCH-Endpunkt, um bestimmte Felder eines Servers mit der angegebenen ID zu aktualisieren
app.patch('/:id', (req, res) => {
    const serverId = parseInt(req.params.id, 10);
    const server = serverData[serverId];

    if (!server) {
        return res.status(404).json({ message: "Server not found" });
    }

    // Nur die Felder aktualisieren, die im Request-Body enthalten sind
    const updatedFields = req.body;

    // Serverdaten mit den neuen Feldern aktualisieren
    serverData[serverId] = { ...serverData[serverId], ...updatedFields };

    res.json({ message: `Server with ID ${serverId} has been partially updated`, server: serverData[serverId] });
});