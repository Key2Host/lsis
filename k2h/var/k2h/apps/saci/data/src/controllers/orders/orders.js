const { Stripe } = require('stripe');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user.model');
const { JWT_SECRET } = require('../../config/jwt.config');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async getOrders(req, res) {

    },
    async postOrders(req, res) {
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
};