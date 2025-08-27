import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = ({ onLogin, onRegister, onLogout, isLoggedIn }) => (
  <AppBar position="static" sx={{ bgcolor: '#3949ab' }}>
    <Toolbar>
      <StorefrontIcon sx={{ mr: 2, fontSize: 32 }} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: 2 }}>
        Sistema de Ventas
      </Typography>
      {isLoggedIn ? (
        <Button color="inherit" onClick={onLogout}>Cerrar sesión</Button>
      ) : (
        <Box>
          <Button color="inherit" onClick={() => window.openLoginModal && window.openLoginModal()}>Iniciar sesión</Button>
          <Button color="inherit" onClick={() => window.openRegisterModal && window.openRegisterModal()}>Registrarse</Button>
        </Box>
      )}
    </Toolbar>
  </AppBar>
);

export default Navbar;
