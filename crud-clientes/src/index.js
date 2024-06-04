const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const clienteRoutes = require('./routes/clientes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/api/clientes', clienteRoutes);

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/crud_clientes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
