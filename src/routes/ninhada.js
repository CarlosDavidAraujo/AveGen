const express = require("express");
const router = express.Router();
const ninhadaController = require("../controllers/ninhada");

router.post("/ninhadas/cadastro", ninhadaController.createNinhada);
router.get("/ninhadas/:id", ninhadaController.getNinhada);
router.put("/ninhadas/atualiza", ninhadaController.updateNinhada);
module.exports = router;
