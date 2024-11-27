const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_3kHaXgyvtomuCPxjblN', {
  host: 'mysql-2792a6b2-hustler6343.e.aivencloud.com',
  dialect: 'mysql',
  port: 11357,
  ssl: {
    require: true,
    rejectUnauthorized: false,  
  },
});

exports.dbconnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL database using Sequelize");
  } catch (error) {
    console.log("Unable to connect to MySQL database:", error);
  }
};
