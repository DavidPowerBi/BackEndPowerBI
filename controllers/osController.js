const OS = require("../models/os");

//Listar todas as OS
exports.list = async (req, res) => {
  try {
    const osList = await OS.findAll();
    res.render("os/index", { osList });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Criar nova OS
exports.create = async (req, res) => {
  res.render("os/create");
};

exports.createPost = async (req, res) => {
  const { OS, SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP } = req.body;
  try {
    await OS.create({ OS, SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP });
    res.redirect("/os");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Editar OS
exports.edit = async (req, res) => {
  const { id } = req.params;
  try {
    const os = await OS.findByPk(id);
    res.render("os/edit", { os });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.editPost = async (req, res) => {
  const { id } = req.params;
  const { SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP } = req.body;
  try {
    await OS.update(
      { SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP },
      {
        where: { OS: id },
      },
    );
    res.redirect("/os");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Deletar OS
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await OS.destroy({ where: { OS: id } });
    res.redirect("/os");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
