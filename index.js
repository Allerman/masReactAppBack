const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/indexRoute');
require('dotenv').config();

const app = express(); 

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB!');
});

// Habilitar o uso de JSON no corpo da solicitação
app.use(express.json());

// Usar as rotas definidas
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
