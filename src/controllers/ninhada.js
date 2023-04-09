const Casal = require("../models/casal");
const Ninhada = require("../models/ninhada");

exports.cadastraNinhada = async (req, res) => {
  try {
    const casal = await Casal.findByPk(1);
    const ninhada = await Ninhada.create();
    await casal.addNinhada(ninhada);
    res.status(201).json(ninhada);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}