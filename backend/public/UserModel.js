import { DataTypes } from 'sequelize';
import sequelize from '../utils/db';
// About this strange construction see file index.js in this folder
const User = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
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
        tableName: 'User',
    });
    return User;
};

export default User;
