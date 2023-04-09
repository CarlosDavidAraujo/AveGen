const express = require('express');
const router = express.Router();
const ninhadaController = require('../controllers/ninhada');

router.post('/ninhada/cadastro', ninhadaController.cadastraNinhada);

module.exports = router;