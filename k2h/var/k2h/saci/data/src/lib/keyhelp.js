const axios = require('axios');
const db = require('../config/db.config');

async function getActiveInstances() {
    return await db.models.NodeInstance.findAll({ where: { active: 1, type: 'Keyhelp' } });
}

async function createUserOnKeyhelp(pUsername, pEmail, pPassword, pHostingPlan, pFirstname, pLastname, pCompany, pTelephone, pAddress, pCity, pZIP, pState, pCountry) {
    const instances = await getActiveInstances();

    for (const instance of instances) {
        try {
            const response = await axios.post(instance.api_url + '/clients', {
                username: pUsername,
                language: "en",
                email: pEmail,
                password: pPassword,
                id_hosting_plan: pHostingPlan,
                send_login_credentials: true,
                create_system_domain: false,
                contact_data: {
                    first_name: pFirstname,
                    last_name: pLastname,
                    company: pCompany,
                    telephone: pTelephone,
                    address: pAddress,
                    city: pCity,
                    zip: pZIP,
                    state: pState,
                    country: pCountry,
                },
            }, {
                headers: {
                    'X-API-Key': API_TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (response.data.success) {
                console.log(`✅ Nutzer erfolgreich auf ${instance.name} angelegt`);
                return response.data;
            }
        } catch (error) {
            console.error(`❌ Fehler auf ${instance.name}:`, error.response ? error.response.data : error.message);
        }
    }

    throw new Error('Alle KeyHelp-Instanzen konnten den Nutzer nicht erstellen.');
}

async function updateUserOnAllKeyhelp(username, newPlan) {
    const instances = await getActiveInstances();

    for (const instance of instances) {
        try {
            const response = await axios.post(instance.api_url + '/user/update', {
                username,
                hosting_plan: newPlan
            }, {
                headers: { 'X-API-Key': instance.api_key }
            });

            console.log(`✅ Plan von ${username} auf ${instance.name} aktualisiert.`);
        } catch (error) {
            console.error(`❌ Fehler beim Update auf ${instance.name}:`, error.response ? error.response.data : error.message);
        }
    }
}

module.exports = { createUserOnKeyhelp, updateUserOnAllKeyhelp };