const express = require('express');
const router = express.Router();
const casalController = require('../controllers/casal');

router.post('/casais/cadastro', casalController.createCasal);
router.get('/casais/:id', casalController.getCasal);
router.get('/casais', casalController.getCasais);

module.exports = router;