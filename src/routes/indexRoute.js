// routes/index.js
const express = require('express');
const multer = require('multer');
const DenunciaController = require('../controllers/DenunciaController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Pasta onde as imagens serão salvas temporariamente

// Rota para criar uma nova denúncia
router.post('/newdenuncia', upload.single('foto'), DenunciaController.createDenuncia);

// Rota para obter todas as denúncias
router.get('/denuncias', DenunciaController.showDenuncias);

module.exports = router;
