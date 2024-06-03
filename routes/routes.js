// ////////////////MÓDULOS//////////////
// const express = require("express");
// const router = express.Router();
// //MODELS
// const tarefaController = require("../controller/tarefaController");

// //REQUISIÇÕES HTTP PRINCIPAIS
// router.get("/", (req, res) => {
//   return res.json({ message: "Sistema de Lista de Tarefas" });
// });

// //REQUISIÇÕES HTPP TAREFA
// //POST - CADASTRAR
// router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);
// //GET - LISTAR
// router.get("/tarefas/:id?", tarefaController.TarefaListar);
// //PUT - ATUALIZAR
// router.put("/tarefas/:id", tarefaController.TarefaUpdate);
// //DELETE - EXCLUIR
// router.delete("/tarefas/:id", tarefaController.TarefaDelete);

// module.exports = router;

const express = require("express");
const router = express.Router();
const tarefaController = require("../controller/tarefaController");

//Routes
router.get('/tarefas', tarefaController.TarefaListar);
router.post('/tarefas', tarefaController.TarefaCreate);
router.put('/tarefas/:id', tarefaController.TarefaUpdate);
router.delete('/tarefas/:id', tarefaController.TarefaDelete);

module.exports = router;