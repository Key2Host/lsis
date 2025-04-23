const express = require('express');
const app = express();
require('dotenv').config();
const { log } = require('./src/utils/logger');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: (origin, callback) => {
        // Erlaube serverseitige Anfragen ohne Origin (z. B. von Postman) oder gleiche Quelle
        if (!origin) return callback(null, true);

        // Erlaubte Domains (z. B. Subdomains von key2host.com + localhost)
        const allowedDomains = [
            /\.key2host\.com$/,              // *.key2host.com
            /^http:\/\/localhost(:\d+)?$/    // http://localhost und beliebige Ports
        ];

        const isAllowed = allowedDomains.some(regex => regex.test(origin));

        if (isAllowed) {
            callback(null, true);
        } else {
            console.warn(`CORS verweigert für Origin: ${origin}`);
            callback(new Error('Nicht erlaubt durch CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200 // Verhindert Probleme mit alten Browsern (z. B. IE11)
};

app.use(cors(corsOptions));
app.use(cookieParser());

log(`The REST API is started up. Please wait...`)

// Importiere Routen
const userRoutes = require('./src/routes/user.routes');
const adminRoutes = require('./src/routes/admin.routes');
const publicRoutes = require('./src/routes/public.routes');
const authRoutes = require('./src/routes/auth.routes');

app.use(express.json()); // JSON-Parsing aktivieren

// API-Routen registrieren
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/auth', authRoutes);
//app.use('/hooks/');

const PORT = process.env.PORT || 80;
app.listen(PORT, () => log(`Server läuft auf http://localhost:${PORT}`));
