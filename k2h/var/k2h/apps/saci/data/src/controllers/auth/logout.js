const { RefreshTokens } = require('../../models/auth.model');
const { log } = require('../../utils/logger');

module.exports = {
    async logout(req, res) {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(400).json({ error: 'Kein Refresh Token bereitgestellt' });
        }

        try {
            // Token in der Datenbank suchen und löschen
            const refreshTokenDB = await RefreshTokens.findOne({ where: { token: refreshToken } });

            if (!refreshTokenDB) {
                return res.status(404).json({ error: 'Token nicht gefunden' });
            }

            await refreshTokenDB.destroy();

            res.clearCookie('accessToken', { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: 'None', path: "/" });
            res.clearCookie('refreshToken', { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: 'None', path: "/" });

            res.status(200).json({ message: 'Erfolgreich ausgeloggt' });

        } catch (err) {
            log(err);
            res.status(500).json({ error: 'Serverfehler beim Logout' });
        }
    }
};