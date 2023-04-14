const express = require('express');
const especieController = require('../controllers/especie');

const router = express.Router();

router.post('/especies/cadastro', especieController.createEspecie);
router.get('/especies', especieController.getAllEspecies);

module.exports = router;