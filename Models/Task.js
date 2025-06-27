const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');    
const { type } = require('os');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    project_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'projects', // Assuming you have a Project model
            key: 'id'
        }
    },
     assigned_to: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users', // Assuming you have a User model
            key: 'id'
        }
    }
    ,
    status: {
        type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
        defaultValue: 'Pending'
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    priority: {
        type: DataTypes.ENUM('Low', 'Medium', 'High'),
        defaultValue: 'Medium'
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: 'tasks' // Optional, specify the table name if different
});