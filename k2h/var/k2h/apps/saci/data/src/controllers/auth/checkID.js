const { User } = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/jwt.config');
const { Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async checkID(req, res) {
        try {
            const token = req.cookies.accessToken;
            const decoded = jwt.verify(token, JWT_SECRET);
            const userid = decoded.id;

            const user = await User.findOne({ where: { id: userid } });

            const verificationSession = await stripe.identity.verificationSessions.create({
                type: 'document',
                return_url: 'https://auth.key2host.com/sign-up/completed',
                related_customer: user.stripeCustomerId,
                options: {
                    document: {
                        allowed_types: ['id_card'],
                        require_id_number: false,
                        require_live_capture: true,
                        require_matching_selfie: true,
                    },
                },
            });

            // Return only the client url to the frontend.
            res.json({ url: verificationSession.url });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Fehler beim Erstellen des ID-Check" });
        }
    }
};