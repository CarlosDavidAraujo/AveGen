
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Casal = require('./casal');
const Ninhada = require('./ninhada');

const Ave = sequelize.define('ave', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sexo: {
    type: DataTypes.ENUM('macho', 'fêmea'),
    allowNull: false
  },
});

Casal.hasMany(Ave, {foreignKey: 'casal_de_origem'});
Ave.belongsTo(Casal);

Casal.hasMany(Ninhada, {foreignKey: 'casal_de_origem'});
Ninhada.belongsTo(Casal);

Ninhada.hasMany(Ave, {foreignKey: 'ninhada_de_origem'});
Ave.belongsTo(Ninhada);

sequelize.sync();

module.exports = Ave;
