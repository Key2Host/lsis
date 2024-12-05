const axios = require('axios');
const express = require('express');
const app = express.Router();
const config = require("../../../config");

const API_URL = 'https://web1.key2host.com/api/v2';
const API_TOKEN = config.keyhelp1;

async function createUser(pUsername, pEmail, pPassword, pHostingPlan, pFirstname, pLastname, pCompany, pTel, pAddress, pCity, pZIP, pState, pCountry) {
    try {
        const response = await axios.post(
            `${API_URL}/clients`,
            {
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
            },
            {
                headers: {
                    'X-API-Key': API_TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error('Fehler beim Erstellen des Benutzers:', error.response?.data || error.message);
    }
}

async function setSuspended(pUser, pState) {
    try {
        const response = await axios.put(
            `${API_URL}/clients/${pUser}`,
            {
                is_suspended: pState
            },
            {
                headers: {
                    'X-API-Key': API_TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error('Fehler beim Aktualisieren des Benutzerstatus:', error.response?.data || error.message);
    }
}

async function setHostingPlan(pUser, pPlan) {
    try {
        const response = await axios.put(
            `${API_URL}/clients/${pUser}`,
            {
                id_hosting_plan: pPlan
            },
            {
                headers: {
                    'X-API-Key': API_TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error('Fehler beim Aktualisieren des Benutzerstatus:', error.response?.data || error.message);
    }
}

async function deleteUser(pUser) {
    try {
        const response = await axios.delete(
            `${API_URL}/clients/${pUser}`,
            {
                headers: {
                    'X-API-Key': API_TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error('Fehler beim Aktualisieren des Benutzerstatus:', error.response?.data || error.message);
    }
}

module.exports = app;
