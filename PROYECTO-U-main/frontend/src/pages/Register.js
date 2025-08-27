import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { registerUsuario } from '../services/api';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !nombre) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    const res = await registerUsuario({ nombre, correo: email, password });
    if (res.error) {
      setError(res.error);
      return;
    }
    onRegister && onRegister(res);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f4f6f8' }}>
      <Paper elevation={6} sx={{ p: 4, minWidth: 340 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <StorefrontIcon sx={{ fontSize: 40, color: '#3949ab', mr: 1 }} />
          <Typography variant="h5" fontWeight={700}>Crear Cuenta</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField label="Nombre" fullWidth margin="normal" value={nombre} onChange={e => setNombre(e.target.value)} />
          <TextField label="Correo" type="email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Contraseña" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
          {error && <Typography color="error" variant="body2">{error}</Typography>}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, bgcolor: '#3949ab' }}>Registrarse</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
