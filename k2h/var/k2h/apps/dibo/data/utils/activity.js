const { ActivityType } = require('discord.js');

module.exports = function(client) {
    // Definiere ein Array von Aktivitäten, die sich auf Server-Hosting beziehen
    const activities = [
        { name: 'Server Logs', type: ActivityType.Watching },
        { name: 'Datenbanken', type: ActivityType.Listening },
        { name: 'Uptime-Monitoring', type: ActivityType.Watching },
        { name: 'Kundenanfragen', type: ActivityType.Listening },
        { name: 'schnelle SSDs', type: ActivityType.Competing },
        { name: 'sichere Netzwerke', type: ActivityType.Watching },
        { name: 'VPS-Deployments', type: ActivityType.Watching },
        { name: 'DDOS-Schutz', type: ActivityType.Listening },
        { name: 'automatische Backups', type: ActivityType.Watching }
    ];

    // Funktion, die die Aktivität ändert
    const updateActivity = () => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(randomActivity.name, { type: randomActivity.type });
    };

    // Ändere die Aktivität alle 60 Sekunden
    setInterval(updateActivity, 60 * 1000);

    // Setze direkt beim Start eine Aktivität
    updateActivity();
};
