const {Sequelize}= require('sequelize');

const sequelize =new Sequelize('assignment','root','hustler6343',{
    host:'localhost',
    dialect:'mysql',
})

exports.dbconnection=async()=>{
    try {
        await sequelize.authenticate();
        console.log("Connected to Mysql database using sequelize ")
    } catch (error) {
        console.log("unable to connect to Mysql database",error);
        
    }
};