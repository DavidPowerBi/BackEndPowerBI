// const Sequelize = require("sequelize");
// const database = require("../db/db");

// const Tarefa = database.define(
//   "tarefa",
//   {
//     id_tarefa: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     titulo: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     descricao: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//   },
//   { database, modelname: "tarefa", tableName: "tarefas" },
// );
// module.exports = Tarefa;


const Sequelize = require("sequelize");
const database = require('../db/db');

const Tarefa = database.define('tarefa', {
  OS: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  SETOR: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  PERIODO: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  EQUIPAMENTOS: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ESTADO: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  TIPO_EQUIP: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Tarefa;