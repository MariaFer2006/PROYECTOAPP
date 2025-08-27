const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const PORT = 4000;

// Conectar a BD
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api/clientes', clienteRoutes);
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api/usuarios', usuarioRoutes);

// Servidor
app.listen(PORT, () => console.log(`Servidor backend corriendo en http://localhost:${PORT}`));
