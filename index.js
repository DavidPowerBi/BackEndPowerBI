// const express = require('express');
// const app = express();
// const database = require('./db/db');
// //MODELS
// const Tarefas = require('./model/tarefasModel');
// const routes = require('./routes/routes');

// //CODIFICAÇÃO UTILIZAÇÃO DO JSON
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// //SINCRONISMO COM O BANCO DE DADOS
// try {
//   database.sync().then(()=>{
    
//   })
// }
// catch(erro){
//   console.log("Houve uma falha ao sincronizar com o banco de dados",erro);
// };
// //ROTA PRINCIPAL
// app.use("/", routes);
// app.listen(3000);

const express = require('express');
const app = express();
const database = require('./db/db');
const routes = require('./routes/routes');

// Middleware for parsing JSON requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Synchronize the database models
database.sync().then(() => {
  console.log('Banco de dados conectado com sucesso.');
})
.catch(error => {
  console.error('Erro ao conectar ao banco de dados:', error);
});

//Use routes
app.use('/', routes);

//Start the server
app.listen(3000, ()=>{
  console.log('Servidor rodando na porta 3000.');
});