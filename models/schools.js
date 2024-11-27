const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('assignment', 'root', 'hustler6343', {
  host: 'localhost',
  dialect: 'mysql',
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
