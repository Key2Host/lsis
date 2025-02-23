const nodemailer = require('nodemailer');

let serverData = [
  {
    name: "FFM [GER]",
    coords: [50.1109, 8.6821],
    state: 1,
    stats: {
      "-20": 99.8,
      "-19": 99.8,
      "-18": 99.8,
      "-17": 99.8,
      "-16": 99.8,
      "-15": 0,
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

// GET-Endpunkt, um alle Serverdaten abzurufen
function getServer(req, res) {
  res.json(serverData);
}

// GET-Endpunkt, um die Daten von Server mit id abzurufen
function getServerInfo(req, res) {
  const serverId = parseInt(req.params.id, 10);
  const server = serverData[serverId];
  if (!server) {
    return res.status(404).json({ message: "Server not found" });
  }
  req.server = server;
  res.json(req.server);
}

// GET-Endpunkt, um die Incidents von Server mit id abzurufen
function getIncidents(req, res) {
  const serverId = parseInt(req.params.id, 10);
  const server = serverData[serverId];
  if (!server) {
    return res.status(404).json({ message: "Server not found" });
  }
  req.server = server;
  const data = req.server.incidents;
  if (!data || Object.keys(data).length === 0) {
    return res.status(404).json({ message: "This server has no incidents" });
  }
  res.json(data);
}

// GET-Endpunkt, um die geplanten Wartungsarbeiten von Server mit id abzurufen
function getPlannedMaintenance(req, res) {
  const serverId = parseInt(req.params.id, 10);
  const server = serverData[serverId];
  if (!server) {
    return res.status(404).json({ message: "Server not found" });
  }
  req.server = server;
  const data = req.server.plannedMaintenance;
  if (!data || Object.keys(data).length === 0) {
    return res.status(404).json({ message: "This server has no planned maintenance" });
  }
  res.json(data);
}

async function postContact(req, res) {
  try {
    const { firstname, lastname, email, message } = req.body;

    if (!firstname || !lastname || !email || !message) {
      return res.status(400).json({ message: 'Alle Felder müssen ausgefüllt werden!' });
    }

    const transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail', // Standard-Pfad für Sendmail (ggf. anpassen)
    });

    // Bestätigungsmail an den Absender
    const userMailOptions = {
      from: '"Key2Host Support" <no-reply@key2host.com>',
      to: email,
      subject: 'Bestätigung: Ihre Anfrage bei Key2Host',
      text: `Hallo ${firstname},\n\nWir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich.\n\nIhre Nachricht:\n"${message}"\n\nMit freundlichen Grüßen\nIhr Key2Host-Team`,
    };

    // Mail mit den Anfragedaten an Key2Host-Support
    const adminMailOptions = {
      from: '"Kontaktformular" <no-reply@key2host.com>',
      to: 'info@key2host.com',
      subject: 'Neue Kontaktanfrage',
      text: `Neue Kontaktanfrage:\n\nName: ${firstname} ${lastname}\nE-Mail: ${email}\nNachricht:\n${message}`,
    };

    // Beide Mails senden
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getServer, getServerInfo, getIncidents, getPlannedMaintenance, postContact };