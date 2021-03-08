var Sequelize = require('sequelize');
var database = require('./database');

var Users = database.define(
  'users',
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    birthday: Sequelize.DATE,
    password: Sequelize.STRING,
    gender_id: Sequelize.TINYINT,
  },
  {
    timestamps: false,
  },
);

module.exports = Users;
