const express = require("express");
const config = require("./config/config");
//const bodyParser = require("body-parser");
//const exphbs = require("express-handlebars");
const sequelize = require("./config/database");
const osRoutes = require("./routes/routes");
const app = express();

//Condificação Utilizando o JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SINCRONISMO COM O BANCO DO MYSQL
try {
  sequelize.sync().then(() => {});
} catch (error) {
  console.log("Erro ao sincronizar com o banco de dados", error);
}

//ROTA PRINCIPAL
app.use("/", osRoutes);
app.listen(3000);
