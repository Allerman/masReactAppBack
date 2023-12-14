// routes/index.js
const express = require('express');
const DenunciaController = require('../controllers/DenunciaController');

const router = express.Router();

router.post('/novadenuncia', DenunciaController.createDenuncia);
router.get('/denuncias', DenunciaController.showDenuncias);
router.get('/atualizardenuncia', DenunciaController.updateDenuncia);
router.get('/deletardenuncia', DenunciaController.deleteDenuncia);

module.exports = router;
