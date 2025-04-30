const { UserEmail } = require('../../models/user.model');
const nodemailer = require('nodemailer');
const { log } = require('../../utils/logger');

module.exports = {
    async recover(req, res) {
        const { email } = req.body;

        // Überprüfen, ob eine E-Mail im Body angegeben wurde
        if (!email) {
            return res.status(400).json({ message: 'E-Mail-Adresse muss angegeben werden!' });
        }

        try {
            // Überprüfen, ob die E-Mail in der Benutzerdatenbank existiert und primär ist
            const userEmail = await UserEmail.findOne({
                where: { email, is_primary: 1 }, // Suche nach einer primären E-Mail-Adresse
            });

            if (!userEmail) {
                return res.status(400).json({ message: 'E-Mail-Adresse nicht gefunden oder ist nicht die primäre E-Mail!' });
            }

            // E-Mail mit dem Link zum Zurücksetzen des Passworts senden
            await sendPasswordResetEmail(userEmail, "123");

            res.status(200).json({
                message: 'Ein Link zum Zurücksetzen des Passworts wurde an deine E-Mail-Adresse gesendet.',
            });
        } catch (err) {
            log('❌ Fehler beim Senden der Passwort-Zurücksetzung:', err);
            res.status(500).json({ message: 'Fehler beim Senden der E-Mail' });
        }
    }
};

// Funktion zum Versenden der E-Mail
async function sendPasswordResetEmail(user, token) {
    const transporter = nodemailer.createTransport({
        // Direktes Senden ohne SMTP-Server
        sendmail: true,
        path: '/usr/sbin/sendmail',
    });

    const resetLink = `http://deine-website.com/reset-password?token=${token}`;

    const mailOptions = {
        from: 'no-reply@key2host.com',
        to: "info@key2host.com",
        subject: 'Passwort zurücksetzen',
        text: `Klicke auf den folgenden Link, um dein Passwort zurückzusetzen: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);
}