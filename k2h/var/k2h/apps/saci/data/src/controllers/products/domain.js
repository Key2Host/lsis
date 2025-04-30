const { Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async getDomain(req, res) {
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
};