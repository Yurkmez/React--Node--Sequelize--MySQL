const { DataTypes } = require('sequelize');
const sequelize = require('../configDB/db');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true, //default to @true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Имена таблиц и полей принято писать всегда в нижнем регистре
    // tableName: 'user',
});

module.exports = User;
