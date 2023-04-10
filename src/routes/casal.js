const express = require('express');
const router = express.Router();
const casalController = require('../controllers/casal');

router.post('/casal/cadastro', casalController.createCasal);
router.get('/casal/:id', casalController.getCasal);

module.exports = router;