const { Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async checkVoucher(req, res) {
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
};