// models/Denuncia.js
const mongoose = require('mongoose');

const denunciaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  latitude: {
    type: {
      type: [Number],
      required: true,
    },
  longitude: {
      type: [Number],
      required: true,
    },
  },
});

// Criar um índice espacial para consultas de localização
const Denuncia = mongoose.model('Denuncia', denunciaSchema);

module.exports = Denuncia;
