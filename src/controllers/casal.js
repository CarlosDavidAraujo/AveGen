const Casal = require("../models/casal");

exports.cadastraCasal = async (req, res) => {
  try {
    const casal = await Casal.create({
      macho: 1,
      femea: 3
    });
    res.status(201).json(casal);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}