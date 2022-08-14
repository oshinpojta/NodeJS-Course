const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'darkknight2785', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
