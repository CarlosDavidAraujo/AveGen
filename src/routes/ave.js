const express = require('express');
const router = express.Router();
const birdController = require('../controllers/ave');

router.post('/ave/cadastro', birdController.createAve);
router.get('/ave/:id', birdController.getAve);
router.get('/ave', birdController.getAllAves);
router.put('/ave/update', birdController.updateAve);
router.delete('/ave/delete', birdController.deleteAve);

module.exports = router;