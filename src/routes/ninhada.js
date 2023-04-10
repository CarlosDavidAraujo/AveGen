const express = require('express');
const router = express.Router();
const ninhadaController = require('../controllers/ninhada');

router.post('/ninhada/cadastro', ninhadaController.createNinhada);
router.get('/ninhada/:id', ninhadaController.getNinhada);

module.exports = router;