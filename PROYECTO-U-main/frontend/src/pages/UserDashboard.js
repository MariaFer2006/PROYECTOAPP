import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import TableChartIcon from '@mui/icons-material/TableChart';

const metrics = [
  { label: 'Ventas Hoy', value: '$2,350', icon: <BarChartIcon sx={{ color: '#00bcd4', fontSize: 36 }} />, color: '#e3f2fd' },
  { label: 'Clientes', value: '128', icon: <PeopleIcon sx={{ color: '#3949ab', fontSize: 36 }} />, color: '#fffde7' },
  { label: 'Productos', value: '56', icon: <Inventory2Icon sx={{ color: '#ff9800', fontSize: 36 }} />, color: '#fbe9e7' },
];

const initialVentas = [
  { id: 1, cliente: 'María López', producto: 'Laptop', total: 1200, fecha: '22/08/2025' },
  { id: 2, cliente: 'Carlos Pérez', producto: 'Mouse', total: 25, fecha: '22/08/2025' },
  { id: 3, cliente: 'Ana Torres', producto: 'Monitor', total: 180, fecha: '21/08/2025' },
  { id: 4, cliente: 'Luis Gómez', producto: 'Teclado', total: 45, fecha: '21/08/2025' },
];

const productos = [
  { label: 'Laptop', value: 'Laptop' },
  { label: 'Mouse', value: 'Mouse' },
  { label: 'Monitor', value: 'Monitor' },
  { label: 'Teclado', value: 'Teclado' },
];

const initialClientes = [
  { id: 1, nombre: 'María López', email: 'maria@email.com', telefono: '555-1234' },
  { id: 2, nombre: 'Carlos Pérez', email: 'carlos@email.com', telefono: '555-5678' },
  { id: 3, nombre: 'Ana Torres', email: 'ana@email.com', telefono: '555-8765' },
];

const initialProductos = [
  { id: 1, nombre: 'Laptop', precio: 1200 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Monitor', precio: 180 },
  { id: 4, nombre: 'Teclado', precio: 45 },
];

const UserDashboard = ({ usuario }) => {
  const [ventas, setVentas] = useState(initialVentas);
  const [openVenta, setOpenVenta] = useState(false);
  const [ventaForm, setVentaForm] = useState({ cliente: '', producto: '', total: '', fecha: '' });
  const [ventaError, setVentaError] = useState('');
  const [sidebarSelected, setSidebarSelected] = useState('Dashboard');
  const [openAllVentas, setOpenAllVentas] = useState(false);

  const handleOpenVenta = () => {
    setVentaForm({ cliente: '', producto: '', total: '', fecha: new Date().toLocaleDateString('es-MX') });
    setVentaError('');
    setOpenVenta(true);
  };

  const handleChangeVenta = e => {
    setVentaForm({ ...ventaForm, [e.target.name]: e.target.value });
  };

  const handleGuardarVenta = () => {
    if (!ventaForm.cliente || !ventaForm.producto || !ventaForm.total || isNaN(Number(ventaForm.total))) {
      setVentaError('Todos los campos son obligatorios y el total debe ser un número');
      return;
    }
    setVentas([
      { ...ventaForm, id: ventas.length + 1, total: Number(ventaForm.total), fecha: ventaForm.fecha || new Date().toLocaleDateString('es-MX') },
      ...ventas
    ]);
    setOpenVenta(false);
  };

  const handleSidebarClick = (section) => {
    setSidebarSelected(section);
  };

  const handleLogout = () => {
    alert('Sesión cerrada');
  };

  const handleOpenAllVentas = () => setOpenAllVentas(true);
  const handleCloseAllVentas = () => setOpenAllVentas(false);

  // Renderizado condicional según la sección seleccionada
  let mainContent = null;
  if (sidebarSelected === 'Dashboard') {
    mainContent = (
      <>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h4" fontWeight={900} color="#23272f">Panel de Control</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: '#00bcd4', fontWeight: 700, px: 3, ':hover': { bgcolor: '#0097a7' } }}
            onClick={handleOpenVenta}
          >
            Nueva Venta
          </Button>
        </Box>
        {/* Metrics Cards */}
        <Grid container spacing={3}>
          {metrics.map((m, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper elevation={6} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2, bgcolor: m.color, borderRadius: 4, boxShadow: '0 8px 32px #3949ab22' }}>
                {m.icon}
                <Box>
                  <Typography variant="body2" color="text.secondary">{m.label}</Typography>
                  <Typography variant="h5" fontWeight={700}>{m.value}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* Chart Placeholder */}
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4, minHeight: 260, mb: 2, boxShadow: '0 8px 32px #00bcd422', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" fontWeight={700} color="#3949ab" mb={2}>Gráfica de Ventas (próximamente)</Typography>
          <Box sx={{ width: '100%', height: 160, bgcolor: '#e3f0ff', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b0bec5', fontSize: 32, fontWeight: 700 }}>
            [Gráfica aquí]
          </Box>
        </Paper>
      </>
    );
  } else if (sidebarSelected === 'Ventas') {
    mainContent = (
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, boxShadow: '0 8px 32px #3949ab22' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" fontWeight={700} color="#23272f">Ventas</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: '#00bcd4', fontWeight: 700, px: 3, ':hover': { bgcolor: '#0097a7' } }}
            onClick={handleOpenVenta}
          >
            Nueva Venta
          </Button>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f7fa' }}>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Cliente</th>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Producto</th>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Total</th>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: 12 }}>{row.cliente}</td>
                  <td style={{ padding: 12 }}>{row.producto}</td>
                  <td style={{ padding: 12 }}>${row.total}</td>
                  <td style={{ padding: 12 }}>{row.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Paper>
    );
  } else if (sidebarSelected === 'Clientes') {
    mainContent = (
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, boxShadow: '0 8px 32px #3949ab22' }}>
        <Typography variant="h6" fontWeight={700} color="#23272f" mb={2}>Clientes</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f7fa' }}>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Nombre</th>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Email</th>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {initialClientes.map((cliente) => (
                <tr key={cliente.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: 12 }}>{cliente.nombre}</td>
                  <td style={{ padding: 12 }}>{cliente.email}</td>
                  <td style={{ padding: 12 }}>{cliente.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Paper>
    );
  } else if (sidebarSelected === 'Productos') {
    mainContent = (
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, boxShadow: '0 8px 32px #3949ab22' }}>
        <Typography variant="h6" fontWeight={700} color="#23272f" mb={2}>Productos</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f7fa' }}>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Nombre</th>
                <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Precio</th>
              </tr>
            </thead>
            <tbody>
              {initialProductos.map((producto) => (
                <tr key={producto.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: 12 }}>{producto.nombre}</td>
                  <td style={{ padding: 12 }}>${producto.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Paper>
    );
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #f8fafc 100%)' }}>
      {/* Sidebar */}
      <Box sx={{
        width: { xs: 70, md: 240 },
        background: 'linear-gradient(120deg, #23272f 60%, #3949ab 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        py: 4,
        px: { xs: 1, md: 3 },
        boxShadow: 6,
        zIndex: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, width: '100%' }}>
          <Avatar sx={{ bgcolor: '#00bcd4', width: 48, height: 48, mr: { md: 2 } }}>
            {usuario?.nombre ? usuario.nombre[0] : 'U'}
          </Avatar>
          <Typography variant="h6" fontWeight={700} color="#fff" sx={{ display: { xs: 'none', md: 'block' } }}>
            {usuario?.nombre || 'Usuario'}
          </Typography>
        </Box>
        <List sx={{ width: '100%' }}>
          <ListItem button selected={sidebarSelected === 'Dashboard'} onClick={() => handleSidebarClick('Dashboard')}>
            <ListItemIcon sx={{ color: '#fff' }}><DashboardIcon /></ListItemIcon>
            <ListItemText primary={<Typography color="#fff">Dashboard</Typography>} sx={{ display: 'block' }} />
          </ListItem>
          <ListItem button selected={sidebarSelected === 'Clientes'} onClick={() => handleSidebarClick('Clientes')}>
            <ListItemIcon sx={{ color: '#fff' }}><PeopleIcon /></ListItemIcon>
            <ListItemText primary={<Typography color="#fff">Clientes</Typography>} sx={{ display: 'block' }} />
          </ListItem>
          <ListItem button selected={sidebarSelected === 'Productos'} onClick={() => handleSidebarClick('Productos')}>
            <ListItemIcon sx={{ color: '#fff' }}><Inventory2Icon /></ListItemIcon>
            <ListItemText primary={<Typography color="#fff">Productos</Typography>} sx={{ display: 'block' }} />
          </ListItem>
          <ListItem button selected={sidebarSelected === 'Ventas'} onClick={() => handleSidebarClick('Ventas')}>
            <ListItemIcon sx={{ color: '#fff' }}><TableChartIcon /></ListItemIcon>
            <ListItemText primary={<Typography color="#fff">Ventas</Typography>} sx={{ display: 'block' }} />
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          startIcon={<LogoutIcon />}
          sx={{
            color: '#fff',
            mt: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            bgcolor: '#3949ab',
            ':hover': { bgcolor: '#23272f' }
          }}
          fullWidth
          onClick={handleLogout}
        >
          Cerrar sesión
        </Button>
      </Box>
      {/* Main Content */}
      <Box sx={{ flex: 1, p: { xs: 2, md: 5 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {mainContent}
        {/* Modal Nueva Venta */}
        <Dialog open={openVenta} onClose={() => setOpenVenta(false)} maxWidth="xs" fullWidth>
          <DialogTitle>Nueva Venta</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Cliente"
              name="cliente"
              value={ventaForm.cliente}
              onChange={handleChangeVenta}
              fullWidth
              autoFocus
            />
            <TextField
              select
              label="Producto"
              name="producto"
              value={ventaForm.producto}
              onChange={handleChangeVenta}
              fullWidth
            >
              {productos.map((p) => (
                <MenuItem key={p.value} value={p.value}>{p.label}</MenuItem>
              ))}
            </TextField>
            <TextField
              label="Total ($)"
              name="total"
              value={ventaForm.total}
              onChange={handleChangeVenta}
              type="number"
              fullWidth
            />
            <TextField
              label="Fecha"
              name="fecha"
              value={ventaForm.fecha}
              onChange={handleChangeVenta}
              fullWidth
            />
            {ventaError && <Typography color="error">{ventaError}</Typography>}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenVenta(false)}>Cancelar</Button>
            <Button variant="contained" onClick={handleGuardarVenta}>Guardar</Button>
          </DialogActions>
        </Dialog>
        {/* Modal Ver Todas las Ventas */}
        <Dialog open={openAllVentas} onClose={handleCloseAllVentas} maxWidth="md" fullWidth>
          <DialogTitle>Todas las Ventas</DialogTitle>
          <DialogContent>
            <Box sx={{ overflowX: 'auto', mt: 2 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f5f7fa' }}>
                    <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Cliente</th>
                    <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Producto</th>
                    <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Total</th>
                    <th style={{ padding: 12, textAlign: 'left', color: '#3949ab', fontWeight: 700 }}>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {ventas.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: 12 }}>{row.cliente}</td>
                      <td style={{ padding: 12 }}>{row.producto}</td>
                      <td style={{ padding: 12 }}>${row.total}</td>
                      <td style={{ padding: 12 }}>{row.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAllVentas}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default UserDashboard;