const express = require("express");
const router = express.Router();
const osController = require("../controllers/osController");

//REQUISIÇÃO HTTP PRINCIPAL
router.get("/", (req, res) => {
  return res.json({ message: "Sistema de OS Preventivas" });
});
//REQUISIÇÃO HTTP GET
router.get("/os", osController.OsGet);
//REQUISIÇÃO HTTP POST
router.post("/os", osController.OsCreate);
//REQUISIÇÃO HTTP PUT
router.put("/os/:os", osController.OsUpdate);
//REQUISIÇÃO HTTP DELETE
router.delete("/os/:os", osController.OsDelete);

module.exports = router;

// //Rota para listar OS
// router.get("/os", osController.list);

// //Rota para criar nova OS
// router.get("/os/create", osController.create);
// router.post("/os/create", osController.createPost);

// //Rota para editar OS
// router.get("/os/edt/:id", osController.edit);
// router.post("/os/edt/:id", osController.editPost);

// //Rota para deletar OS
// router.get("/os/delete/:id", osController.delete);
