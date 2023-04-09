const Ave = require('../models/ave');
const Casal = require('../models/casal');
const Ninhada = require('../models/ninhada');

exports.cadastraAve = async (req, res) => {
  try {
    const novaAve = await Ave.create({
      nome: 'agaporni',
      sexo: 'macho'
    });
    const casal = await Casal.findOne({
      where: {
        macho: 1,
        femea: 3
      }
    });
    const ninhada = await Ninhada.findOne({
      where: {
        casal_de_origem: casal.id
      }
    });
    await ninhada.addAve(novaAve)
    await casal.addAve(novaAve);
    res.status(201).json(novaAve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.atualizaAve = async (req, res) => {
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

    if (antigoCasalDeOrigem)  {
      await antigoCasalDeOrigem.removeAve(ave);
    }

    await ninhadaDeOrigem.addAve(ave)
    await novoCasalDeOrigem.addAve(ave);
    res.status(201).json(ave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletaAve = async (req, res) => {
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


