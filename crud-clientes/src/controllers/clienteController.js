const Cliente = require('../models/Cliente');

// Criar um novo cliente
exports.createCliente = async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    res.status(201).json(novoCliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obter um cliente pelo ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.status(200).json(cliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Atualizar um cliente
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.status(200).json(cliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar um cliente
exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.status(200).json({ message: 'Cliente deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
