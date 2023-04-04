const { DataTypes } = require('sequelize');
const db = require('../../config/database');
const Specie = require('./specie');

const Bird = db.define('Aves', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sexo: {
    type: DataTypes.ENUM('macho', 'fêmea', 'a definir'),
    allowNull: false,
  },
  anilha_numero: {
    type: DataTypes.STRING,
  },
  data_nascimento: {
    type: DataTypes.DATEONLY
  },
  especie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Espécies',
      key: 'id'
    }
  }
}, {
  freezeTableName: true
});

Bird.hasOne(Specie, {
  foreignKey: 'especie_id'
});
Specie.belongsTo(Bird);

async function sync() {
  await Bird.sync();
  console.log("The table for the Bird model was just (re)created!");
}

sync();

module.exports = Bird;