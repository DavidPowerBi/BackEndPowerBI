const express = require('express');
const app = express();
const database = require('./db/db');
//MODELS
const Usuario = require('./model/usuarioModel');
const Tarefas = require('./model/tarefasModel');
const routes = require('./routes/routes');

//CODIFICAÇÃO UTILIZAÇÃO DO JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(()=>{
    
  })
}
catch(erro){
  console.log("Houve uma falha ao sincronizar com o banco de dados",erro);
};
//ROTA PRINCIPAL
app.use("/", routes);
app.listen(3000);
