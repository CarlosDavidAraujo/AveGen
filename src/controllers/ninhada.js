const Ave = require("../models/ave");
const Casal = require("../models/casal");
const Ninhada = require("../models/ninhada");

exports.createNinhada = async (req, res) => {
  try {
    const { id, estagio } = req.body;
    const casal = await Casal.findByPk(id);
    const ninhada = await casal.createNinhada({ estagio });
    res.status(201).json(ninhada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNinhada = async (req, res) => {
  try {
    const { id } = req.params;
    const ninhada = await Ninhada.findByPk(id);
    res.status(201).json(ninhada);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao localizar ninhada");
  }
};

exports.updateNinhada = async (req, res) => {
  try {
    const {
      id,
      estagio,
      postura,
      ovos_total,
      ovos_vazios,
      data_postura,
      data_eclosao,
    } = req.body;
    console.log(id);
    const ninhada = await Ninhada.findByPk(id);
    console.log(ninhada);
    const updatedNinhada = await ninhada.update({
      estagio,
      postura,
      ovos_total,
      ovos_vazios,
      data_postura,
      data_eclosao,
    });

    updatedNinhada &&
      res.json({message: "As informações da ninhada foram atualizadas" });
  } catch (error) {
    console.log(error);
    res.json({message: error});
  }
};
