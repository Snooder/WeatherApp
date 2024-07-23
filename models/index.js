const sequelize = require("../config/sequelizeConfig");
const User = require("./User")(sequelize, require("sequelize").DataTypes);
const List = require("./List")(sequelize, require("sequelize").DataTypes);
const WeatherData = require("./WeatherData")(sequelize, require("sequelize").DataTypes);

const db = {
  sequelize,
  Sequelize: require("sequelize"),
  User,
  List,
  WeatherData,
};

module.exports = db;
