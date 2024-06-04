const express = require("express");
var http = require("http");
var enforce = require("express-sslify");
//const bodyParser = require("body-parser");
//const exphbs = require("express-handlebars");
const sequelize = require("./config/database");
const osRoutes = require("./routes/routes");
const app = express();
const port = 8080;

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

//ROTA HTTPS
app.use(
  enforce.HTTPS({
    trustProtoHeader: true,
  }),
);
http.createServer(app).listen(app.get(port), function () {
  console.log("Express server listening on port " + app.get(port));
});
