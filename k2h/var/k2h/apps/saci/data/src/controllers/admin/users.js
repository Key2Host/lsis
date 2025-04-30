const { User } = require('../../models/user.model');

module.exports = {
    async getUsers(req, res) {
        const users = await User.findAll();
        res.json({ users });
    },

    async getUserByID(req, res) {
        const user = await User.findOne({ where: { id: req.params.id } });
        res.json({ user });
    }
};