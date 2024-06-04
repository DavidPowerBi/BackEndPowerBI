const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OS = sequelize.define(
  "os_preventivas",
  {
    OS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    SETOR: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    PERIODO: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EQUIPAMENTOS: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ESTADO: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    TIPO_EQUIP: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "os_preventivas",
  },
);

module.exports = OS;
