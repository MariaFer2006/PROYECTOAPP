const Usuario = require('../models/Usuario');

exports.registrar = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;
    if (!nombre || !correo || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const existe = await Usuario.findOne({ correo });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }
    const nuevoUsuario = new Usuario({ nombre, correo, password });
    await nuevoUsuario.save();
    res.json({ id: nuevoUsuario._id, nombre, correo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body;
    const usuario = await Usuario.findOne({ correo });
    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    res.json({ id: usuario._id, nombre: usuario.nombre, correo: usuario.correo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};