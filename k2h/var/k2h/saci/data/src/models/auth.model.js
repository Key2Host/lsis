const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const RefreshTokens = sequelize.define('auth_refreshtokens', {
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Korrigiere den Modellnamen auf 'users'
            key: 'id',
        },
        primaryKey: true
    },
    token: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = {
    RefreshTokens,
};