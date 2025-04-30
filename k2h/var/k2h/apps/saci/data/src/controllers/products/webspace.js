const { Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async getWebspace(req, res) {
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
};