const express = require('express');
const router = express.Router();
const birdController = require('../controllers/ave');

router.post('/ave/cadastro', birdController.cadastraAve);
router.put('/ave/update', birdController.atualizaAve);
router.delete('/ave/delete', birdController.deletaAve);

module.exports = router;