const Ave = require("../models/ave");
const Casal = require("../models/casal");
const Ninhada = require("../models/ninhada");

exports.createCasal = async (req, res) => {
  try {
    const { macho_id, femea_id } = req.body;
    const casalExistente = await Casal.findOne({
      where: {
        macho_id,
        femea_id,
      },
    });
    if (casalExistente) {
      return res.json({
        message: "O casal que você está tentando criar já existe!",
      });
    }
    const casal = await Casal.create({
      macho_id,
      femea_id,
    });
    res.status(201).json({ message: "Casal criado com sucesso", data: casal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCasal = async (req, res) => {
  try {
    const { id } = req.params;
    const casal = await Casal.findByPk(id, {
      include: [
        {
          model: Ave,
          as: "macho",
        },
        {
          model: Ave,
          as: "femea",
        },
        Ninhada,
      ],
    });
    if (!casal) {
      return res.send("O casal nao existe");
    }
    res.status(201).json(casal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.getCasais = async (req, res) => {
  try {
    const casais = await Casal.findAll({
      include: [
        {
          model: Ave,
          as: 'macho'
        },
        {
          model: Ave,
          as: 'femea'
        }
      ]
    });
    res.json(casais);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
