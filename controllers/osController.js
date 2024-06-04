const OS = require("../models/os");

module.exports = class osController {
  //CREATE
  static async OsCreate(req, res) {
    let osId = req.body.OS;
    let SETOR = req.body.SETOR;
    let PERIODO = req.body.PERIODO;
    let EQUIPAMENTOS = req.body.EQUIPAMENTOS;
    let ESTADO = req.body.ESTADO;
    let TIP_EQUIP = req.body.TIPO_EQUIP;
    const os = {
      os: osId,
      setor: SETOR,
      periodo: PERIODO,
      equipamentos: EQUIPAMENTOS,
      estado: ESTADO,
      tipo_equip: TIP_EQUIP,
    };
    await OS.create(os);
    return res.json({ message: "OS cadastrada com sucesso!" });
  }

  //READ
  static async OsGet(req, res) {
    const os = await OS.findAll();
    res.json(os);
  }

  //UPDATE
  static async OsUpdate(req, res) {
    const id_os = req.params.os;
    let setor = req.body.SETOR;
    let periodo = req.body.PERIODO;
    let equipamentos = req.body.EQUIPAMENTOS;
    let estado = req.body.ESTADO;
    let tipo_equip = req.body.TIPO_EQUIP;
    const os = {
      OS: id_os,
      SETOR: setor,
      PERIODO: periodo,
      EQUIPAMENTOS: equipamentos,
      ESTADO: estado,
      TIPO_EQUIP: tipo_equip,
    };
    await OS.update(os, { where: { OS: id_os } });
    res.json({
      message:
        "OS atualizada com sucesso! Foram atualizadas as seguintes informações: ",
      dados: os,
    });
  }

  //DELETE
  static async OsDelete(req, res) {
    const id_os = req.params.os;
    await OS.destroy({ where: { OS: id_os } });
    res.json({ message: "Tarefa excluída com sucesso!" });
  }
};

//CODIGO ANTERIOR

//Listar todas as OS
// exports.list = async (req, res) => {
//   try {
//     const osList = await OS.findAll();
//     res.render("os/index", { osList });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// //Criar nova OS
// exports.create = async (req, res) => {
//   res.render("os/create");
// };

// exports.createPost = async (req, res) => {
//   const { OS, SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP } = req.body;
//   try {
//     await OS.create({ OS, SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP });
//     res.redirect("/os");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// //Editar OS
// exports.edit = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const os = await OS.findByPk(id);
//     res.render("os/edit", { os });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// exports.editPost = async (req, res) => {
//   const { id } = req.params;
//   const { SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP } = req.body;
//   try {
//     await OS.update(
//       { SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP },
//       {
//         where: { OS: id },
//       },
//     );
//     res.redirect("/os");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// //Deletar OS
// exports.delete = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await OS.destroy({ where: { OS: id } });
//     res.redirect("/os");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };
