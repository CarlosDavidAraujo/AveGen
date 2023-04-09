const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');


const Casal = sequelize.define('casais', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  macho: {
    type: DataTypes.STRING,
  },
  femea: {
    type: DataTypes.STRING,
  }
}, {
  freezeTableName: true,
  indexes: [{
    unique: true,
    fields: ['macho', 'femea']
  }]
});

module.exports = Casal;
