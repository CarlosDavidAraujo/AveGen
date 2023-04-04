const Bird = require("../models/bird");
const Specie = require("../models/specie");

/**Cadastra uma ave */
exports.createBird = async (req, res) => {
    const {nome, sexo, especie} = req.body;
    const agaporni = await Bird.create({nome: nome,sexo: sexo, especie_id: especie});
    res.send(agaporni.toJSON());
}

/**Retorna todas as aves */
exports.getAllBirds = async (req, res) => {
    const birds = await Bird.findAll();
    const birdsInfo = (JSON.stringify(birds, null, 2));
    res.send(`Lista de aves: ${birdsInfo}`);
}

/**Retorna uma ave */
exports.getBird = (req, res) => {
    res.send('mostra uma ave');
}

/**Exclui uma ave */
exports.deleteBird = (req, res) => {
    res.send('ave deletada');
}

/**Atualiza cadastro da ave */
exports.updateBird = (req, res) => {
    res.send('ave atualizada');
}