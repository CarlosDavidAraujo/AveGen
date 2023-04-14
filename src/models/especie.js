const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Especie = sequelize.define('especie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Especie;