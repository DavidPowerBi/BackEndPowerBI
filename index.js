const express = require("express");
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

// const app = express();

// // Configurar body-parser
// app.use(bodyParser.urlencoded({ extended: false }));

// // Configure Handlebars
// function renderHandlebars(filePath, context, callback) {
//   const handlebars = exphbs.create({ defaultLayout: "main" });
//   handlebars.engine(filePath, context, (err, html) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, html);
//     }
//   });
// }

// app.engine("handlebars", renderHandlebars);
// app.set("view engine", "handlebars");

// //Rota inicial
// app.get("/", (req, res) => {
//   res.render("layouts/main");
// });

// // Configure rotas
// app.use("/os", osRoutes);

// // Conectar ao banco de dados e iniciar o servidor
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Conexão com o banco de dados estabelecida com sucesso!");
//     app.listen(3000, () => {
//       console.log("Servidor iniciado na porta 3000");
//     });
//   })
//   .catch((err) => {
//     console.log("Não foi possível conectar ao banco de dados:", err);
//   });
