const express = require("express");
const router = express.Router();
const osController = require("../controllers/osController");

//Rota para listar OS
router.get("/os", osController.list);

//Rota para criar nova OS
router.get("/os/create", osController.create);
router.post("/os/create", osController.createPost);

//Rota para editar OS
router.get("/os/edt/:id", osController.edit);
router.post("/os/edt/:id", osController.editPost);

//Rota para deletar OS
router.get("/os/delete/:id", osController.delete);

module.exports = router;
