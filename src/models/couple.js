/* const { DataTypes } = require('sequelize');
const db = require('../../config/database');
const Bird = require('./bird');

const Couple = db.define('Casais', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pai_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mae_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

const BirdCouple = db.define('AvesCasais', {
  bird_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Aves',
      key: 'id'
    }
  },
  couple_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Casais',
      key: 'id'
    }
  },
  papel: {
    type: DataTypes.ENUM('Pai', 'Mãe', 'Filho'),
    //allowNull: false,
  }
});

Couple.belongsToMany(Bird, { through: BirdCouple });
Bird.belongsToMany(Couple, { through: BirdCouple });

async function sync() {
  await Couple.sync();
  console.log("The table for the Couple model was just (re)created!");
}

sync();

module.exports = Couple; */