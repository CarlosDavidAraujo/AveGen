
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Casal = require('./casal');
const Ninhada = require('./ninhada');
const Especie = require('./especie');

const Ave = sequelize.define('ave', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  anilha: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  sexo: {
    type: DataTypes.ENUM('macho', 'fêmea'),
    allowNull: false
  },
});

Especie.hasMany(Ave);
Ave.belongsTo(Especie);

Casal.hasMany(Ave, {foreignKey: 'casal_de_origem'});
Ave.belongsTo(Casal, { foreignKey: 'casal_de_origem' });

Casal.belongsTo(Ave, {as: 'macho', foreignKey: 'macho_id'});
Casal.belongsTo(Ave, {as: 'femea', foreignKey: 'femea_id'});

Casal.hasMany(Ninhada, {foreignKey: 'casal_de_origem'});
Ninhada.belongsTo(Casal, {foreignKey: 'casal_de_origem'});

Ninhada.hasMany(Ave, {foreignKey: 'ninhada_de_origem'});
Ave.belongsTo(Ninhada, { foreignKey: 'ninhada_de_origem' });

sequelize.sync(/* {force: true} */);

module.exports = Ave;
