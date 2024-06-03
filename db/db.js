//BIBLIOTECAS/MODULOS UTILIZADOS
const Sequelize = require("sequelize");
const mysql2 = require("mysql2"); //Import the MySQL driver

//Database Configuration
const sequelize = new Sequelize(
  "beruqq9ohnevddvwkvmk",
  "ux3afhq8ncg88oyd",
  "IuRRGTC7Gc5WkjZbjxtO",
  {
    host: "beruqq9ohnevddvwkvmk-mysql.services.clever-cloud.com",
    dialect: "mysql",
    dialectModule: mysql2,
  },
);

//Test the connection
(async()=>{
  try {
    await sequelize.authenticate();
    console.log("Conexão foi estabelecida com sucesso.");
  } catch (error) {
    console.error("Falha ao conectar ao banco de dados:", error);
  }
})();


module.exports = sequelize;
