const express = require('express');
const router = express.Router();
const casalController = require('../controllers/casal');

router.post('/casal/cadastro', casalController.cadastraCasal);

module.exports = router;