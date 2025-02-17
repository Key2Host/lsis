const express = require('express');
const app = express();
require('dotenv').config();
const { log } = require('./src/utils/logger');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || origin.startsWith('http://localhost')) {
            callback(null, true);
        } else {
            callback(new Error('Nicht erlaubt durch CORS'));
        }
    },
    credentials: true
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => log(`Server läuft auf http://localhost:${PORT}`));
