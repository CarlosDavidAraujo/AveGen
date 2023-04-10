const { Op } = require('sequelize');
const Ave = require('../models/ave');
const Casal = require('../models/casal');
const Ninhada = require('../models/ninhada');

exports.createAve = async (req, res) => {
  try {
    const novaAve = await Ave.create({
      nome: 'agaporni',
      sexo: 'femea'
    });
    res.status(201).json(novaAve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAve = async (req, res) => {
  try {
    const ave = await Ave.findByPk(4);
    const antigoCasalDeOrigem = await ave.getCasai();
    const novoCasalDeOrigem = await Casal.findOne({
      where: {
        macho: 1,
        femea: 2
      }
    });
    const ninhadaDeOrigem = await Ninhada.findOne({
      where: {
        casal_de_origem: novoCasalDeOrigem.id
      }
    });

    if (antigoCasalDeOrigem) {
      await antigoCasalDeOrigem.removeAve(ave);
    }

    await ninhadaDeOrigem.addAve(ave)
    await novoCasalDeOrigem.addAve(ave);
    res.status(201).json(ave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAve = async (req, res) => {
  try {
    const aveDeletada = await Ave.destroy({
      where: {
        id: 3
      }
    });
    res.status(201).json(aveDeletada);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getAve = async (req, res) => {
  try {
    const { id } = req.params;
    const ave = await Ave.findByPk(id);
    if (!ave) {
      return res.send('Ave não encontrada');
    }
    const casalDeOrigem = await Casal.findByPk(ave.casal_de_origem);
    const casaisRelacionados = await Casal.findAll({
      where: {
        [Op.or]: {
          macho: ave.id,
          femea: ave.id
        }
      }
    });
    res.status(201).json({
      ave,
      casalDeOrigem,
      casaisRelacionados
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).send('Erro ao localizar a ave');
  }
}

exports.getAllAves = async (req, res) => {
  try {
    const aves = await Ave.findAll();
    res.status(201).json(aves);
  }
  catch(error) {
    console.log(error);
    res.status(500).send('Erro ao localizar as aves');
  }
}


