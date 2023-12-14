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
  localizacao: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  endereco: {
    road: String,
    suburb: String,
    city: String,
    state: String,
  },
});

// Criar um índice espacial para consultas de localização
denunciaSchema.index({ localizacao: '2dsphere' });

const Denuncia = mongoose.model('Denuncia', denunciaSchema);

module.exports = Denuncia;
