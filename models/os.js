const { Sequelize, DataTypes } = require("sequelize");
//const Sequelize = require("sequelize");
const sequelize = require("../config/database");
//const OS = database.define()
const OS = sequelize.define(
  "os_preventivas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    OS: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PERIODO: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EQUIPAMENTOS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TIPO_EQUIP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "os_preventivas",
    sequelize,
    modelname: "os",
  },
);

module.exports = OS;
