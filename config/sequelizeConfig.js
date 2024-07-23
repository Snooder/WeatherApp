const {Sequelize} = require("sequelize");
const keys = require("../server/keys");

const sequelize = new Sequelize(keys.pgDatabase, keys.pgUser, keys.pgPassword, {
  host: keys.pgHost,
  dialect: "postgres",
  port: keys.pgPort,
});

module.exports = sequelize;
