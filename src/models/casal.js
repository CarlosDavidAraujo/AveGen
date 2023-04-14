const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');


const Casal = sequelize.define('casais', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

}, {
  freezeTableName: true,
  indexes: [{
    unique: true,
    fields: ['macho_id', 'femea_id']
  }]
});

module.exports = Casal;
