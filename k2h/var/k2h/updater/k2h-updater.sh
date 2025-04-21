#!/bin/bash

# Temporäres Arbeitsverzeichnis erstellen
TMP_DIR=$(mktemp -d)

# In den temporären Ordner wechseln
cd "$TMP_DIR" || exit 1

# Repository klonen
git clone https://github.com/key2host/lsis || exit 1

# In das Repository wechseln
cd lsis || exit 1

# update.sh ausführen
bash update.sh || exit 1

# Zurück und temporären Ordner löschen
cd /
rm -rf "$TMP_DIR"