const { Stripe } = require('stripe');
const jwt = require('jsonwebtoken');
const { UserEmail } = require('../models/user.model');
const { JWT_SECRET } = require('../config/jwt.config');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function userHello(req, res) {
    res.json({
        message: "Welcome!",
        user: { name: req.user.username }
    });
}

async function getWebspaceInfo(req, res) {
    const priceIDs = [
        'price_1Qt6joCh2zruBO1L0QP0a8sU',   // WebLite
        'price_1Qt6mxCh2zruBO1LwQmyIYtm',   // WebPro
        'price_1Qt6mxCh2zruBO1LjtQmJiPH'    // WebMax
    ];

    try {
        // Array zum Speichern der Paketdaten
        const packages = [];

        // Abrufen der Preis- und Produktinformationen für jede PriceID
        for (const priceID of priceIDs) {
            // Preis-Informationen mit der angegebenen PriceID abrufen
            const price = await stripe.prices.retrieve(priceID);

            // Preis in Euro umwandeln (Preis in Cent wird durch 100 geteilt)
            const amountInEuro = price.unit_amount / 100;

            // Paketdaten zum Array hinzufügen
            packages.push({
                priceID: priceID,
                name: price.nickname, // Falls keine Beschreibung existiert
                amount: amountInEuro.toFixed(2)  // Formatierung auf 2 Dezimalstellen
            });
        }

        // Alle Pakete zurückgeben
        res.status(200).json({ packages });
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        res.status(500).json({ error: 'Fehler beim Abrufen der Preisinformationen oder Produktinformationen' });
    }
}

async function getDomainInfo(req, res) {
    const priceIDs = [
        'price_1Qso2HCh2zruBO1Lnsvtotct', // .de
        'price_1Qso1ZCh2zruBO1LPVYmDbWY', // .com
        'price_1Qso3TCh2zruBO1LbtzlyGXr', // .net
        'price_1Qso57Ch2zruBO1LcI6l3BMi', // .org
        'price_1Qso3kCh2zruBO1L1zwd9aZI', // .eu
        'price_1Qso61Ch2zruBO1LSHrmuLNw', // .biz
        'price_1Qso6LCh2zruBO1LC9q5kVUJ', // .io
        'price_1Qso7ICh2zruBO1L133TYiCs', // .dev
        'price_1Qso6YCh2zruBO1LARARUfW0', // .app
        'price_1Qso6oCh2zruBO1LDQqUB064', // .shop
        'price_1Qso5WCh2zruBO1Ld9eAso20', // .info
        'price_1Qso77Ch2zruBO1LsAv5mDfB', // .xyz
    ];

    try {
        // Array zum Speichern der Paketdaten
        const packages = [];

        // Abrufen der Preis- und Produktinformationen für jede PriceID
        for (const priceID of priceIDs) {
            // Preis-Informationen mit der angegebenen PriceID abrufen
            const price = await stripe.prices.retrieve(priceID);

            // Produkt-ID aus dem Preis-Objekt extrahieren
            const productID = price.product;

            // Produkt-Informationen anhand der Produkt-ID abrufen
            const product = await stripe.products.retrieve(productID);

            // Preis in Euro umwandeln (Preis in Cent wird durch 100 geteilt)
            const amountInEuro = price.unit_amount / 100;

            // Paketdaten zum Array hinzufügen
            packages.push({
                name: price.nickname.replace("TLD .", ""),
                priceID: priceID,
                available: true,
                amount: amountInEuro.toFixed(2)  // Formatierung auf 2 Dezimalstellen
            });
        }

        // Alle Pakete zurückgeben
        res.status(200).json({ packages });
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        res.status(500).json({ error: 'Fehler beim Abrufen der Preisinformationen oder Produktinformationen' });
    }
}

async function buy(req, res) {
    try {
        const items = req.body.items; // Annahme, dass der Warenkorb als Array übergeben wird

        if (!Array.isArray(items)) {
            return res.status(400).json({ error: 'Items müssen als Array übergeben werden.' });
        }

        // Überprüfen, ob jedes Element im Array die Felder 'name', 'amount' und 'quantity' hat
        for (const item of items) {
            if (!item.id) {
                return res.status(401).json({ error: 'Jedes Item muss eine Produktnummer enthalten!' });
            }
        }

        // Get User Email
        const token = req.cookies.accessToken;
        const decoded = jwt.verify(token, JWT_SECRET);
        const userid = decoded.id;
        const userMail = await UserEmail.findOne({ where: { user: userid, is_primary: true } });

        // Angenommen, das 'item' hat jetzt eine 'prodID', die auf ein Stripe-Produkt verweist
        const session = await stripe.checkout.sessions.create({
            line_items: items.map(item => ({
                price: item.id, // Nutze die prodID, die dem Stripe-Produkt zugeordnet ist
                quantity: item.quantity, // Menge des Produkts
            })),
            mode: 'subscription', // Setzt den Modus auf Abonnement
            success_url: `https://www.key2host.com/checkout/success`,
            cancel_url: `https://www.key2host.com/checkout/failed`,
            customer_email: userMail.email
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { userHello, getWebspaceInfo, getDomainInfo, buy };