const Sequelize = require("sequelize");

const connection = new Sequelize('loginabc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;