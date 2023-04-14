const Especie = require("../models/especie");

exports.createEspecie = async (req, res) => {
  try {
    const {nome} = req.body;
    const especie = await Especie.create({
      nome
    });
    res.status(201).json({message: 'Espécie criada com sucesso'});
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro ao criar espécie'});
  }
}

exports.getAllEspecies = async (req, res) => {
  try {
    const especies = await Especie.findAll();
    res.status(201).json(especies);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro ao buscar especies'});
  }
}