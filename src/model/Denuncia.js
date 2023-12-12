// models/Denuncia.js
const mongoose = require('mongoose');

const denunciaSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  localizacao: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

// Criar um índice espacial para consultas de localização
denunciaSchema.index({ localizacao: '2dsphere' });

const Denuncia = mongoose.model('Denuncia', denunciaSchema);

module.exports = Denuncia;
