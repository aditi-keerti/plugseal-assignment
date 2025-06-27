const { Sequelize, Datatypes } = require('sequelize');
const  { sequelize } = require ('../config/db');

//import models
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Project = require('./Project')(sequelize, Sequelize.DataTypes);   
const Comment = require('./Comment')(sequelize, Sequelize.DataTypes);
const Task = require('./Task')(sequelize, Sequelize.DataTypes);
const ActivityLog = require('./ActivityLog')(sequelize, Sequelize.DataTypes);

// Define associations

//User-Project association
User.hasMany(Project, { foreignKey: 'created_by' });
Project.belongsTo(User, { foreignKey: 'created_by' });

//User-Comment association
User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

//User-Task association
User.hasMany(Task, { foreignKey: 'assigned_to' });
Task.belongsTo(User, { foreignKey: 'assigned_to' });

//Project-Task association
Project.hasMany(Task, { foreignKey: 'project_id' });
Task.belongsTo(Project, { foreignKey: 'project_id' });

//Task-Comment association
Task.hasMany(Comment, { foreignKey: 'task_id' });
Comment.belongsTo(Task, { foreignKey: 'task_id' });

//User-Comment association
User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

//User-ActivityLog association
User.hasMany(ActivityLog, { foreignKey: 'user_id' });       
ActivityLog.belongsTo(User, { foreignKey: 'user_id' });

//Task-ActivityLog association
Task.hasMany(ActivityLog, { foreignKey: 'task_id' });
ActivityLog.belongsTo(Task, { foreignKey: 'task_id' });


module.exports = {
    User,
    Project,
    Comment,
    Task,
    ActivityLog
};



