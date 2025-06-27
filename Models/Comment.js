const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');    

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tasks', // Assuming you have a Task model
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Assuming you have a User model
            key: 'id'
        }
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false
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
    tableName: 'comments' // Optional, specify the table name if different
});

module.exports = { Comment };
// This code defines a Comment model using Sequelize ORM. It includes fields for id, task_id, user_id, comment_text, created_at, and updated_at. The task_id and user_id fields reference the Task and User models respectively to establish relationships. The timestamps option adds createdAt and updatedAt fields automatically. The tableName option specifies the name of the database table.