//User model
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('Admin', 'User', 'Manager'),
        defaultValue: 'user'
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: 'users' // Optional, specify the table name if different
});

module.exports = { User };
// This code defines a User model using Sequelize ORM. It includes fields for id, name, email, password, and role.