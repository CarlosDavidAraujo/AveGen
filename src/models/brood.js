const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Bird = require("./bird");
const Couple = require("./couple");


const Brood = sequelize.define('Ninhadas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_inicio_incubacao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  data_fim_incubacao: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  ovos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ovos_vazios: {
    type: DataTypes.INTEGER,
  },
  ovos_cheios: {
    type: DataTypes.INTEGER,
  },
  ovos_gorados: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
});

Brood.belongsTo(Couple);

const BirdBrood = sequelize.define('AvesNinhadas', {
  bird_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model:'Aves',
      key: 'id'
    }
  },
  brood_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Ninhadas',
      key: 'id'
    }
  },
  papel: {
    type: DataTypes.ENUM('Pai', 'Mãe', 'Filho'),
    allowNull: false
  }
});

//Associação muitos-para-muitos entre Aves e Ninhadas
Bird.belongsToMany(Brood, { through: BirdBrood});
Brood.belongsToMany(Bird, { through: BirdBrood});

//Associação um para muitos entre Casais e Ninhadas
Couple.hasMany(Brood);
Brood.belongsTo(Couple, {foreignKey: 'casal_id'});