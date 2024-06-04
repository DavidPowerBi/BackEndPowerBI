const OS = require("../models/os");

module.exports = class osController {
  // CREATE
  static async OsCreate(req, res) {
    try {
      const {
        OS: osId,
        SETOR,
        PERIODO,
        EQUIPAMENTOS,
        ESTADO,
        TIPO_EQUIP,
      } = req.body;
      const os = {
        os: osId,
        setor: SETOR,
        periodo: PERIODO,
        equipamentos: EQUIPAMENTOS,
        estado: ESTADO,
        tipo_equip: TIPO_EQUIP,
      };
      await OS.create(os);
      return res.json({ message: "OS cadastrada com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao cadastrar OS" });
    }
  }

  // READ
  static async OsGet(req, res) {
    try {
      const os = await OS.findAll();
      res.json(os);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar OS" });
    }
  }

  // UPDATE
  static async OsUpdate(req, res) {
    try {
      const id_os = req.params.os;
      const { SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP } = req.body;
      const os = {
        setor: SETOR,
        periodo: PERIODO,
        equipamentos: EQUIPAMENTOS,
        estado: ESTADO,
        tipo_equip: TIPO_EQUIP,
      };
      await OS.update(os, { where: { os: id_os } });
      res.json({
        message:
          "OS atualizada com sucesso! Foram atualizadas as seguintes informações: ",
        dados: os,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar OS" });
    }
  }

  // DELETE
  static async OsDelete(req, res) {
    try {
      const id_os = req.params.os;
      await OS.destroy({ where: { os: id_os } });
      res.json({ message: "OS excluída com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir OS" });
    }
  }
};
