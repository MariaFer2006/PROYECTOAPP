import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';
import ProductoForm from './components/ProductoForm';
import ProductoList from './components/ProductoList';
import { getClientes, getProductos, addCliente, addProducto } from './services/api';
import { Box, Container } from '@mui/material';

const AppRouter = () => {
  const [usuario, setUsuario] = useState(null);
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  React.useEffect(() => {
    getClientes().then(setClientes);
    getProductos().then(setProductos);
  }, []);

  const handleAddCliente = async (cliente) => {
    await addCliente(cliente);
    const nuevos = await getClientes();
    setClientes(nuevos);
  };

  const handleAddProducto = async (producto) => {
    await addProducto(producto);
    const nuevos = await getProductos();
    setProductos(nuevos);
  };

  return (
    <Router>
      <Navbar
        isLoggedIn={!!usuario}
        onLogin={() => window.location.href = '/login'}
        onRegister={() => window.location.href = '/register'}
        onLogout={() => setUsuario(null)}
      />
      <Container maxWidth="lg" sx={{ mt: 4, p: 0, minWidth: 0 }} disableGutters>
        <Routes>
          <Route path="/" element={
            usuario
              ? <UserDashboard usuario={usuario} />
              : <Dashboard 
                  clientesCount={clientes.length} 
                  productosCount={productos.length}
                  onLogin={setUsuario}
                  onRegister={setUsuario}
                />
          } />
          <Route path="/login" element={<Login onLogin={setUsuario} />} />
          <Route path="/register" element={<Register onRegister={setUsuario} />} />
          <Route path="/clientes" element={
            <Box>
              <ClienteForm onSubmit={handleAddCliente} />
              <ClienteList clientes={clientes} />
            </Box>
          } />
          <Route path="/productos" element={
            <Box>
              <ProductoForm onSubmit={handleAddProducto} />
              <ProductoList productos={productos} />
            </Box>
          } />
        </Routes>
      </Container>
    </Router>
  );
};

export default AppRouter;
