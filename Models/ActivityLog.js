const {Sequalize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');            


const ActivityLog = sequelize.define('ActivityLog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Assuming you have a User model
            key: 'id'
        }
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: 'activity_logs' // Optional, specify the table name if different
});

module.exports = { ActivityLog };
// This code defines an ActivityLog model using Sequelize ORM. It includes fields for id, user_id, action, and created_at. The user_id field references the User model to establish a relationship between activity logs and users. The timestamps option adds createdAt and updatedAt fields automatically. The tableName option specifies the name of the database table. This model can be used to track user activities within the application.