#!/bin/bash

# Führe npm install aus und warte auf die Fertigstellung
npm install

# Starte den Node.js-Server
exec /usr/bin/node server.js
