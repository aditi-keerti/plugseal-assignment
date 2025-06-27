const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_by:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Assuming you have a User model
            key: 'id'
        }

    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: 'projects' // Optional, specify the table name if different
});

module.exports = { Project };
// This code defines a Project model using Sequelize ORM. It includes fields for id, name, description, created_by, created_at, and updated_at. The created_by field references the User model to establish a relationship between projects and users. The timestamps option adds createdAt and updatedAt fields automatically. The tableName option specifies the name of the database table.