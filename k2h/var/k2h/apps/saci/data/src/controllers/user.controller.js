const { Stripe } = require('stripe');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');
const { JWT_SECRET } = require('../config/jwt.config');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function userHello(req, res) {
    res.json({
        message: "Welcome!",
        user: {
            fullname: req.user.firstname + " " + req.user.lastname,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            customerID: req.user.customerID
        }
    });
}

async function getWebspaceInfo(req, res) {
    const priceIDs = [
        'price_1RHD2ACh2zruBO1LRPrDsVbz',   // WebLite
        'price_1RHD37Ch2zruBO1LXW0zgpCe',   // WebPro
        'price_1RHD3ICh2zruBO1LB4DfWh8b'    // WebMax
    ];

    try {
        // Erstellung eines Arrays von Promises, wobei jeweils das zugehörige Produkt mitabgerufen wird
        const packagesPromises = priceIDs.map(async (priceID) => {
            try {
                const price = await stripe.prices.retrieve(priceID, {
                    expand: ['product'], // Optimierung durch direktes Expandieren
                });

                const amountInEuro = price.unit_amount / 100;

                return {
                    priceID: priceID,
                    name: price.nickname, // Nutzung des hinterlegten Nicknames
                    amount: amountInEuro.toFixed(2), // Preisformatierung
                };
            } catch (error) {
                console.error(`Fehler beim Abrufen der Preis-Informationen für ${priceID}:`, error);
                return null; // Fehlerhafte Ergebnisse ausblenden
            }
        });

        const packages = (await Promise.all(packagesPromises)).filter(Boolean); // Null-Einträge herausfiltern

        res.status(200).json({ packages });
    } catch (error) {
        console.error("Fehler beim Gesamtablauf:", error);
        res.status(500).json({ error: 'Fehler beim Abrufen der Preisinformationen' });
    }
}


async function getDomainInfo(req, res) {
    const priceIDs = [
        'price_1RHD4wCh2zruBO1Luojm5vDP', // DE
        'price_1RHD5QCh2zruBO1LdVCeYEs1', // COM
        'price_1RHD5bCh2zruBO1LJZcM4fPs', // NET
        'price_1RHD5oCh2zruBO1L7Un2nJgR', // ORG
        'price_1RHD5yCh2zruBO1Lvrk7bOt9', // EU
        'price_1RHD6BCh2zruBO1LKkFJYNbE', // BIZ
        'price_1RHD6WCh2zruBO1LbAyGD1wc', // IO
        'price_1RHD6gCh2zruBO1L0kRX5VDT', // DEV
        'price_1RHD6qCh2zruBO1LjFhzCoer', // APP
        'price_1RHD71Ch2zruBO1LkRAIm4zL', // SHOP
        'price_1RHD7ECh2zruBO1LdDFL8Trb', // INFO
        'price_1RHD7RCh2zruBO1LMmDT5ZwW', // XYZ
    ];

    try {
        // Erstellung eines Arrays von Promises, wobei bei jedem Abruf gleichzeitig das zugehörige Produkt expandiert wird
        const packagesPromises = priceIDs.map(async (priceID) => {
            try {
                const price = await stripe.prices.retrieve(priceID, {
                    expand: ['product'], // Produkt wird direkt mitgeladen
                });
                const amountInEuro = price.unit_amount / 100;
                return {
                    name: price.nickname.replace("TLD .", ""),
                    priceID: priceID,
                    available: true,
                    amount: amountInEuro.toFixed(2),
                };
            } catch (error) {
                console.error(`Fehler bei der Abfrage von Preis ${priceID}:`, error);
                return null; // Fehlerhafte Abfragen werden bewusst ignoriert
            }
        });

        const packages = (await Promise.all(packagesPromises)).filter(Boolean); // Null-Werte filtern

        res.status(200).json({ packages });
    } catch (error) {
        console.error("Fehler beim Gesamtablauf:", error);
        res.status(500).json({ error: 'Fehler beim Abrufen der Preisinformationen' });
    }
}


async function buy(req, res) {
    try {
        const item = req.body.item;
        const voucherid = req.body.voucher;

        if (typeof item !== 'object' || Array.isArray(item) || item === null) {
            return res.status(400).json({ error: 'Item muss ein Objekt sein.' });
        }

        if (!item.id) {
            return res.status(401).json({ error: 'Das Item muss eine Produktnummer enthalten!' });
        }

        if (voucherid && typeof voucherid !== 'string') {
            return res.status(400).json({ error: 'Ein gültiger Gutscheincode muss übermittelt werden.' });
        }

        const token = req.cookies.accessToken;
        const decoded = jwt.verify(token, JWT_SECRET);
        const userid = decoded.id;
        const user = await User.findOne({ where: { id: userid } });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: item.id,
                    quantity: 1,
                }
            ],
            currency: "eur",
            mode: 'subscription', // Setzt den Modus auf Abonnement
            discounts: [
                {
                    promotion_code: voucherid
                }
            ],
            success_url: `https://www.key2host.com/checkout/success`,
            cancel_url: `https://www.key2host.com/checkout/failed`,
            customer: user.stripeCustomerId
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

async function checkVoucher(req, res) {
    try {
        const voucherCode = req.body.code;

        if (!voucherCode || typeof voucherCode !== 'string') {
            return res.status(400).json({ error: 'Ein gültiger Gutscheincode muss übermittelt werden.' });
        }

        const coupons = await stripe.promotionCodes.list({
            code: voucherCode,
            limit: 1
        });

        const voucher = coupons.data[0];

        if (!voucher) {
            return res.status(404).json({ error: 'Gutschein nicht gefunden.' });
        }

        if (!voucher.active || !voucher.coupon.valid) {
            return res.status(404).json({ error: 'Gutscheincode ist ungültig oder abgelaufen.' });
        }

        return res.json({
            id: voucher.id,
            name: voucher.code,
            amount_off: voucher.coupon.amount_off || null,
            percent_off: voucher.coupon.percent_off || null
        });

    } catch (error) {
        console.error('Stripe Error:', error);
        return res.status(500).json({ error: 'Interner Fehler beim Prüfen des Gutscheins.' });
    }
}

module.exports = { userHello, getWebspaceInfo, getDomainInfo, buy, checkVoucher };