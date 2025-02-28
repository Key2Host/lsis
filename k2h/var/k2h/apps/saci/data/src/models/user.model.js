const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    firstname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    sex: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY, // Nur Datum, ohne Zeit
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    postalcode: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    country: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    stripeCustomerId: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false
    },
    pendingActivation: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    suspended: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: true
});

const UserEmail = sequelize.define('users_emails', {
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Korrigiere den Modellnamen auf 'users'
            key: 'id',
        },
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail: true, // Überprüft, ob die E-Mail-Adresse gültig ist
        }
    },
    is_primary: {
        type: DataTypes.TINYINT(4),
        defaultValue: 0,
        allowNull: false,
    },
    verified: {
        type: DataTypes.TINYINT(4),
        defaultValue: 0,
        allowNull: false,
    }
}, {
    timestamps: false
});

const UserPhone = sequelize.define('users_phones', {
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Korrigiere den Modellnamen auf 'users'
            key: 'id',
        },
        primaryKey: true
    },
    number: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    is_primary: {
        type: DataTypes.TINYINT(4),
        defaultValue: 0,
        allowNull: false,
    },
    verified: {
        type: DataTypes.TINYINT(4),
        defaultValue: 0,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = {
    User,
    UserEmail,
    UserPhone
};