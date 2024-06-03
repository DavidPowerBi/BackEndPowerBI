////////////////MÓDULOS//////////////
const express = require('express');
const router = express.Router();
//MODELS
const usuarioController = require('../controller/usuarioController');
const tarefaController = require('../controller/tarefaController');

//REQUISIÇÕES HTTP PRINCIPAIS
router.get("/",(req,res)=>{
  return res.json({message:"Sistema de Lista de Tarefas"}); 
})

//REQUISIÇÕES HTPP USUARIO
//POST - CADASTRAR
router.post("/usuarios/Cadastrar",usuarioController.UsuarioCreate);
//GET - LISTAR
router.get("/usuarios/:id?",usuarioController.UsuarioListar);
//PUT - ATUALIZAR
router.put("/usuarios/:id",usuarioController.UsuarioUpdate);
//DELETE - EXCLUIR
router.delete("/usuarios/:id",usuarioController.UsuarioDelete);

//REQUISIÇÕES HTPP TAREFA
//POST - CADASTRAR
router.post("/tarefas/Cadastrar",tarefaController.TarefaCreate);
//GET - LISTAR
router.get("/tarefas/:id?",tarefaController.TarefaListar);
//PUT - ATUALIZAR
router.put("/tarefas/:id",tarefaController.TarefaUpdate);
//DELETE - EXCLUIR
router.delete("/tarefas/:id",tarefaController.TarefaDelete);

module.exports = router;