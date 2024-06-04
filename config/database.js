const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "beruqq9ohnevddvwkvmk",
  "ux3afhq8ncg88oyd",
  "IuRRGTC7Gc5WkjZbjxtO",
  {
    host: "beruqq9ohnevddvwkvmk-mysql.services.clever-cloud.com",
    dialect: "mysql",
    port: 3306,
  },
);

module.exports = sequelize;
