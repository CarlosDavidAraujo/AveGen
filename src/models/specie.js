const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const Specie = db.define('Espécies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true
});

async function sync() {
  await Specie.sync();
  console.log("The table for the Specie model was just (re)created!");
}

sync();

module.exports = Specie;