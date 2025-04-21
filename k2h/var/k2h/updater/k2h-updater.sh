#!/bin/bash

# Logdatei
LOG_FILE="/var/k2h/updater/update.log"

# Loggingfunktion mit Zeitstempel
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >> "$LOG_FILE"
}

# Temporäres Arbeitsverzeichnis erstellen
TMP_DIR=$(mktemp -d)
log "Temporäres Verzeichnis erstellt: $TMP_DIR"

# In das temporäre Verzeichnis wechseln
cd "$TMP_DIR" || { log "Fehler: Wechsel in $TMP_DIR fehlgeschlagen"; exit 1; }

# Repository klonen
if git clone https://github.com/key2host/lsis >>"$LOG_FILE" 2>&1; then
  log "Repository erfolgreich geklont."
else
  log "Fehler: Klonen des Repositories fehlgeschlagen."
  exit 1
fi

# In das Repository wechseln
cd lsis || { log "Fehler: Verzeichnis 'lsis' nicht gefunden"; exit 1; }

# update.sh ausführen
if bash update.sh >>"$LOG_FILE" 2>&1; then
  log "update.sh erfolgreich ausgeführt."
else
  log "Fehler: update.sh fehlgeschlagen."
  exit 1
fi

# Zurückwechseln und temporäres Verzeichnis löschen
cd /
rm -rf "$TMP_DIR"
log "Temporäres Verzeichnis gelöscht: $TMP_DIR"

log "Updatevorgang abgeschlossen."