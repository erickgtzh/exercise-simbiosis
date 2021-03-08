var Sequelize = require('sequelize');

const database = new Sequelize(
  'exercise', // name database
  'root', // user database
  'root', // password database
  {
    host: 'localhost',
    port: 8889,
    dialect: 'mysql',
  },
);

database.sync();

module.exports = database;
