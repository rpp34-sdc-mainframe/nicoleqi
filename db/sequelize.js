const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sdc', 'postgres', 'root', {
  host: 'localhost',
  dialect:'postgres',
  logging: false,
  // logging: console.log,
});

module.exports = {
  sequelize,
};