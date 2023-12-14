// routes/index.js
const express = require('express');
const DenunciaController = require('../controllers/DenunciaController');

const router = express.Router();

router.post('/novadenuncia', DenunciaController.createDenuncia);
router.get('/denuncias', DenunciaController.showDenuncias);
router.put('/atualizardenuncia/:id', DenunciaController.updateDenuncia);
router.delete('/deletardenuncia/:id', DenunciaController.deleteDenuncia);

module.exports = router;
