const nodemailer = require('nodemailer');

module.exports = {
    async postContact(req, res) {
        try {
            const { firstname, lastname, email, message } = req.body;

            if (!firstname || !lastname || !email || !message) {
                return res.status(400).json({ message: 'Alle Felder müssen ausgefüllt werden!' });
            }

            const transporter = nodemailer.createTransport({
                sendmail: true,
                newline: 'unix',
                path: '/usr/sbin/sendmail', // Standard-Pfad für Sendmail (ggf. anpassen)
            });

            // Bestätigungsmail an den Absender
            const userMailOptions = {
                from: '"Key2Host Support" <no-reply@key2host.com>',
                to: email,
                subject: 'Bestätigung: Ihre Anfrage bei Key2Host',
                text: `Hallo ${firstname},\n\nWir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich.\n\nIhre Nachricht:\n"${message}"\n\nMit freundlichen Grüßen\nIhr Key2Host-Team`,
            };

            // Mail mit den Anfragedaten an Key2Host-Support
            const adminMailOptions = {
                from: '"Kontaktformular" <no-reply@key2host.com>',
                to: 'info@key2host.com',
                subject: 'Neue Kontaktanfrage',
                text: `Neue Kontaktanfrage:\n\nName: ${firstname} ${lastname}\nE-Mail: ${email}\nNachricht:\n${message}`,
            };

            // Beide Mails senden
            await transporter.sendMail(userMailOptions);
            await transporter.sendMail(adminMailOptions);

            return res.sendStatus(200);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
};