const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_3kHaXgyvtomuCPxjblN', {
  host: 'mysql-2792a6b2-hustler6343.e.aivencloud.com',
  dialect: 'mysql',
  port: 11357,
  ssl: {
    require: true,
    rejectUnauthorized: 
  },
});

const School = sequelize.define('School', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: -90,
      max: 90,
    },
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: -180,
      max: 180,
    },
  },
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });

module.exports = School;
