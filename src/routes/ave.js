const express = require('express');
const router = express.Router();
const birdController = require('../controllers/ave');

router.post('/aves/cadastro', birdController.createAve);
router.get('/aves/:id', birdController.getAve);
router.get('/aves', birdController.getAllAves);
router.put('/aves/update', birdController.updateAve);
router.delete('/aves/delete', birdController.deleteAve);

module.exports = router;