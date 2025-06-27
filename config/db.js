//Sequelize connections
const sequelize = require('sequelize');
require ('dotenv').config();

const sequelize = new sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    port: process.env.DB_PORT || 5432,
    logging: true, //setting true to get logs
});

const connectDB = async()=>{
    try{
        await sequalize.authenticate();
        console.log('Database Connection has been established successfully')
    }catch (err) {
        console.log('Error in DB Coonection', err);
    }
}

module.exports = { sequelize, connectDB};