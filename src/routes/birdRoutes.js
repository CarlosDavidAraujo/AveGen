const express = require('express');
const router = express.Router();
const birdController = require('../controllers/birdController');

router.get('/aves', birdController.getAllBirds);

router.post('/aves/cadastro', birdController.createBird);

router.get('/aves/busca', birdController.getBird);

router.post('/aves/atualiza', birdController.updateBird);

router.delete('/aves/deleta', birdController.deleteBird);

module.exports = router;