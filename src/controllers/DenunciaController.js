// controllers/DenunciaController.js
const Denuncia = require('../model/Denuncia');

// Função para criar uma nova denúncia
exports.createDenuncia = async (req, res) => {
  try {
    const { descricao, localizacao } = req.body;
    const foto = req.file.filename; // Assumindo que o arquivo de imagem é enviado como parte do corpo da solicitação

    const novaDenuncia = new Denuncia({
      titulo,
      descricao,
      foto,
      latitude,
      longitude,
    });

    await novaDenuncia.save();

    res.status(201).json({ message: 'Denúncia criada com sucesso' });
  } catch (error) {
    console.error('Erro ao criar denúncia:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Função para obter todas as denúncias
exports.showDenuncias = async (req, res) => {
  try {
    const denuncias = await Denuncia.find();
    res.status(200).json(denuncias);
  } catch (error) {
    console.error('Erro ao obter denúncias:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};