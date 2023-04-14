const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Ninhada = sequelize.define('ninhada', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  estagio: {
    type: DataTypes.ENUM('postura', 'choco', 'tratamento', 'encerrada'),
    allowNull: false
  },
  ovos_total: {
    type: DataTypes.INTEGER
  },
  ovos_vazios: {
    type: DataTypes.INTEGER
  },
  data_postura: {
    type: DataTypes.DATEONLY
  },
  data_eclosao: {
    type: DataTypes.DATEONLY
  }
});

module.exports = Ninhada;
