// controllers/DenunciaController.js
const Denuncia = require('../model/Denuncia');

// Função para criar uma nova denúncia
exports.createDenuncia = async (req, res) => {
  try {
    const { titulo, descricao, latitude, longitude, addressData } = req.body;

    const novaDenuncia = new Denuncia({
      titulo,
      descricao,
      localizacao: {
        type: 'Point',
        coordinates: [latitude, longitude],
      },
      endereco: {
        road: addressData.road,
        suburb: addressData.suburb,
        city: addressData.city,
        state: addressData.state,
      },
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

// Função para atualizar uma denúncia existente
exports.updateDenuncia = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, latitude, longitude } = req.body;

    const denunciaAtualizada = await Denuncia.findByIdAndUpdate(
      id,
      {
        titulo,
        descricao,
        localizacao: {
          type: 'Point',
          coordinates: [latitude, longitude],
        },
        endereco: {
          road: req.body.addressData.road,
          suburb: req.body.addressData.suburb,
          city: req.body.addressData.city,
          state: req.body.addressData.state,
        },
      },
      { new: true } // Retorna a denúncia atualizada
    );

    if (!denunciaAtualizada) {
      return res.status(404).json({ error: 'Denúncia não encontrada' });
    }

    res.status(200).json({ message: 'Denúncia atualizada com sucesso', denuncia: denunciaAtualizada });
  } catch (error) {
    console.error('Erro ao atualizar denúncia:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Função para excluir uma denúncia
exports.deleteDenuncia = async (req, res) => {
  try {
    const { id } = req.params;

    const denunciaExcluida = await Denuncia.findByIdAndDelete(id);

    if (!denunciaExcluida) {
      return res.status(404).json({ error: 'Denúncia não encontrada' });
    }

    res.status(200).json({ message: 'Denúncia excluída com sucesso', denuncia: denunciaExcluida });
  } catch (error) {
    console.error('Erro ao excluir denúncia:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};