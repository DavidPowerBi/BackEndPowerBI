const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // adjust the path to your configuration file

const OS = sequelize.define(
  "OS",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    os: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    setor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    periodo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    equipamentos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tipo_equip: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "os_preventivas",
    timestamps: false, // Add if you do not use timestamps
  },
);

module.exports = OS;
