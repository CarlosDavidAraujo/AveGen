const Casal = require("../models/casal");
const Ninhada = require("../models/ninhada");

exports.createNinhada = async (req, res) => {
  try {
    const casal = await Casal.findByPk(3);
    const ninhada = await casal.createNinhada();
    res.status(201).json(ninhada);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getNinhada = async (req, res) => {
  try{
    const {id} = req.params;
    const ninhada = await Ninhada.findByPk(id);
    res.status(201).json(ninhada);
  }
  catch (error) {
    console.log(error);
    res.status(500).send('Erro ao localizar ninhada');
  }
}