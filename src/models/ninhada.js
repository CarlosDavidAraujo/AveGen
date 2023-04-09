const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Ninhada = sequelize.define('ninhada', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

module.exports = Ninhada;
