const Casal = require("../models/casal");
const Ninhada = require("../models/ninhada");

exports.createCasal = async (req, res) => {
  try {
    const casal = await Casal.create({
      macho: 1,
      femea: 4
    });
    res.status(201).json(casal);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getCasal = async (req, res) => {
  try {
    const {id} = req.params;
    const casal = await Casal.findByPk(id, {
      include: Ninhada
    });
    if (!casal) {
      return res.send('O casal nao existe');
    }
    res.status(201).json(casal);
  }
  catch(error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}