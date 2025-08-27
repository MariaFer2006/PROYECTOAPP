import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Login from './Login';
import Register from './Register';
import { Box, Typography, Paper, Grid, Button, Avatar, Stack, Divider } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import logo from './logo.png'; // ajusta la ruta si está en otra carpeta


const testimonios = [
  {
    nombre: 'María López',
    cargo: 'Gerente de Ventas',
    empresa: 'Comercializadora Nova',
    mensaje: 'Desde que usamos este sistema, nuestro equipo es más productivo y los clientes están más felices.',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    nombre: 'Carlos Pérez',
    cargo: 'CEO',
    empresa: 'Distribuciones Pérez',
    mensaje: 'La plataforma es intuitiva, rápida y el soporte es excelente. ¡Recomendado 100%!',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    nombre: 'Ana Torres',
    cargo: 'Administradora',
    empresa: 'Soluciones Integrales',
    mensaje: 'Me encanta la facilidad para generar reportes y el diseño tan profesional.',
    foto: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const features = [
  {
    icon: <StorefrontIcon sx={{ fontSize: 40, color: '#00bcd4' }} />,
    title: 'Ventas Inteligentes',
    desc: 'Gestiona tus ventas de forma ágil y visualiza el crecimiento de tu negocio en tiempo real.'
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: '#3949ab' }} />,
    title: 'Clientes Felices',
    desc: 'Conoce a tus clientes, mejora la atención y fidelízalos con herramientas personalizadas.'
  },
  {
    icon: <Inventory2Icon sx={{ fontSize: 40, color: '#ff9800' }} />,
    title: 'Inventario al Día',
    desc: 'Controla tu stock y recibe alertas para que nunca falte lo que tus clientes buscan.'
  }
];

const pasos = [
  {
    titulo: '1. Regístrate gratis',
    desc: 'Crea tu cuenta en segundos y comienza a gestionar tu negocio sin complicaciones.',
    color: '#00bcd4'
  },
  {
    titulo: '2. Agrega tus productos y clientes',
    desc: 'Carga tu inventario y tu base de clientes de manera sencilla y rápida.',
    color: '#3949ab'
  },
  {
    titulo: '3. ¡Comienza a vender!',
    desc: 'Emite facturas, consulta reportes y haz crecer tu empresa con información en tiempo real.',
    color: '#ff9800'
  }
];

const partners = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', alt: 'Express' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', alt: 'MongoDB' }
];

const Dashboard = ({ clientesCount, productosCount, onLogin, onRegister }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  // Para que Navbar pueda abrir los modales:
  React.useEffect(() => {
    window.openLoginModal = () => setOpenLogin(true);
    window.openRegisterModal = () => setOpenRegister(true);
  }, []);

  // Cuando se loguea o registra desde el modal, cerrar modal y actualizar login global
  const handleLogin = (...args) => {
    setOpenLogin(false);
    onLogin && onLogin(...args);
  };
  const handleRegister = (...args) => {
    setOpenRegister(false);
    onRegister && onRegister(...args);
  };

  return (
    <>
      {/* Modales de Login y Registro */}
      <Dialog open={openLogin} onClose={() => setOpenLogin(false)} maxWidth="xs" fullWidth>
        <Login onLogin={handleLogin} />
      </Dialog>
      <Dialog open={openRegister} onClose={() => setOpenRegister(false)} maxWidth="xs" fullWidth>
        <Register onRegister={handleRegister} />
      </Dialog>
      <Box sx={{
        mt: 0,
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100vw',
        pb: 12,
        bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        boxSizing: 'border-box'
      }}>
    {/* Fondo decorativo con iconos grandes */}
    <StorefrontIcon sx={{
      position: 'absolute',
      top: 80,
      left: -60,
      fontSize: 320,
      color: '#3949ab11',
      zIndex: 0,
      display: { xs: 'none', md: 'block' }
    }} />
    <Inventory2Icon sx={{
      position: 'absolute',
      bottom: 120,
      right: -80,
      fontSize: 300,
      color: '#00bcd411',
      zIndex: 0,
      display: { xs: 'none', md: 'block' }
    }} />
    {/* Hero Section */}
    <Box sx={{
      background: 'linear-gradient(120deg, #23272f 60%, #3949ab 100%)',
      color: 'white',
      py: { xs: 5, md: 7 },
      px: { xs: 1, sm: 2, md: 6 },
      textAlign: 'center',
      borderRadius: 0,
      mb: { xs: 3, md: 4 },
      boxShadow: 8,
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      maxWidth: '100vw',
      left: 0,
      mx: 0,
      zIndex: 1
    }}>
      {/* Imagen ilustrativa moderna */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', mb: 4, gap: 4 }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img 
           src={logo} 
           alt="Ilustración ventas" 
          style={{ width: 220, borderRadius: 24, boxShadow: '0 4px 24px #3949ab33' }} 
            />
        </Box>
        <Box sx={{ flex: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h2"
              fontWeight={900}
              mb={1}
              sx={{
                letterSpacing: 1.5,
                textShadow: '0 2px 12px #23272f99',
                color: '#fff',
                fontSize: { xs: 32, sm: 40, md: 48 },
                fontFamily: 'Montserrat, Roboto, Arial',
                lineHeight: 1.1,
              }}
            >
            ¡Impulsa tu negocio con nosotros!
          </Typography>
            <Typography
              variant="h5"
              mb={2}
              sx={{
                fontWeight: 600,
                opacity: 0.97,
                color: '#e3f0ff',
                fontSize: { xs: 18, sm: 22, md: 26 },
                fontFamily: 'Montserrat, Roboto, Arial',
                lineHeight: 1.2,
              }}
            >
            Más que un sistema, somos tu aliado estratégico.
          </Typography>
          <Divider sx={{ bgcolor: '#fff', opacity: 0.2, my: 2, mx: { xs: 'auto', md: 0 }, width: 200 }} />
            <Typography
              variant="body1"
              mb={3}
              sx={{
                maxWidth: 600,
                fontSize: { xs: 15, sm: 17, md: 19 },
                opacity: 0.97,
                color: '#e3f0ff',
                fontFamily: 'Roboto, Arial',
                lineHeight: 1.5,
              }}
            >
            Nuestra misión es ayudarte a crecer. Con herramientas modernas, soporte humano y una experiencia pensada para personas reales, tu empresa tendrá el control y la confianza que necesita para destacar.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: '#00bcd4', color: '#fff', fontWeight: 700, px: 4, boxShadow: 2, ':hover': { bgcolor: '#0097a7' } }}
              onClick={() => setOpenRegister(true)}
            >
              ¡Quiero ser parte!
            </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ color: '#fff', borderColor: '#fff', fontWeight: 700, px: 4, boxShadow: 2, ':hover': { bgcolor: '#3949ab22', borderColor: '#00bcd4', color: '#00bcd4' } }}
                onClick={() => {
                  const el = document.getElementById('features-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
              Ver beneficios
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>

    {/* Features Section - horizontal on md+ */}
  <Box id="features-section" sx={{ maxWidth: 1100, mx: 'auto', mb: 7 }}>
      <Grid container spacing={4} justifyContent="center" wrap="nowrap" sx={{
        flexDirection: { xs: 'column', md: 'row' },
        overflowX: { xs: 'auto', md: 'visible' }
      }}>
        {features.map((f, i) => (
          <Grid item xs={12} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center', minWidth: { xs: 300, md: 'unset' } }}>
            <Paper elevation={8} sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 8,
              bgcolor: '#ffffffb8',
              minHeight: 210,
              boxShadow: '0 8px 32px #3949ab22',
              width: { xs: 280, md: 320 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-10px) scale(1.04)',
                boxShadow: '0 16px 48px #3949ab44',
                bgcolor: '#f5f7fa',
              }
            }}>
              {f.icon}
              <Typography variant="h6" fontWeight={700} mt={2} mb={1} color="#3949ab">
                {f.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {f.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Pasos para comenzar */}
    <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 8 }}>
      <Typography variant="h5" fontWeight={700} textAlign="center" mb={4} color="#3949ab">
        ¿Cómo empezar?
      </Typography>
        <Box sx={{
          background: 'linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)',
          py: { xs: 6, md: 8 },
          borderRadius: 6,
          boxShadow: '0 8px 32px #3949ab22',
          my: 8,
          mx: { xs: 0, md: 4 },
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            overflowX: { xs: 'auto', md: 'visible' },
            justifyContent: 'center',
            alignItems: 'stretch',
            px: { xs: 2, md: 0 },
          }}>
            {/* Tarjeta 1 */}
            <Paper elevation={0} sx={{
              p: 4,
              borderRadius: 4,
              minWidth: 320,
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#fff',
              boxShadow: '0 4px 24px #00bcd433',
              position: 'relative',
              overflow: 'visible',
              flex: '0 0 320px',
            }}>
              <Box sx={{
                position: 'absolute',
                top: -36,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: '#00bcd4',
                width: 64,
                height: 64,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px #00bcd455',
                zIndex: 2,
              }}>
                <span style={{ color: '#fff', fontSize: 32, fontWeight: 900 }}>1</span>
              </Box>
              <Typography variant="h6" fontWeight={700} color="#00bcd4" mb={1} mt={5}>
                Regístrate gratis
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Crea tu cuenta en segundos y comienza a gestionar tu negocio sin complicaciones.
              </Typography>
            </Paper>
            {/* Tarjeta 2 */}
            <Paper elevation={0} sx={{
              p: 4,
              borderRadius: 4,
              minWidth: 320,
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#fff',
              boxShadow: '0 4px 24px #3949ab33',
              position: 'relative',
              overflow: 'visible',
              flex: '0 0 320px',
            }}>
              <Box sx={{
                position: 'absolute',
                top: -36,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: '#3949ab',
                width: 64,
                height: 64,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px #3949ab55',
                zIndex: 2,
              }}>
                <span style={{ color: '#fff', fontSize: 32, fontWeight: 900 }}>2</span>
              </Box>
              <Typography variant="h6" fontWeight={700} color="#3949ab" mb={1} mt={5}>
                Agrega tus productos y clientes
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Carga tu inventario y tu base de clientes de manera sencilla y rápida.
              </Typography>
            </Paper>
            {/* Tarjeta 3 */}
            <Paper elevation={0} sx={{
              p: 4,
              borderRadius: 4,
              minWidth: 320,
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#fff',
              boxShadow: '0 4px 24px #ffa00044',
              position: 'relative',
              overflow: 'visible',
              flex: '0 0 320px',
            }}>
              <Box sx={{
                position: 'absolute',
                top: -36,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: '#ffa000',
                width: 64,
                height: 64,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px #ffa00055',
                zIndex: 2,
              }}>
                <span style={{ color: '#fff', fontSize: 32, fontWeight: 900 }}>3</span>
              </Box>
              <Typography variant="h6" fontWeight={700} color="#ffa000" mb={1} mt={5}>
                ¡Comienza a vender!
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Emite facturas, consulta reportes y haz crecer tu empresa con información en tiempo real.
              </Typography>
            </Paper>
          </Box>
        </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" wrap="nowrap" sx={{
        flexDirection: { xs: 'column', md: 'row' },
        overflowX: { xs: 'auto', md: 'visible' }
      }}>
        {pasos.map((p, i) => (
          <Grid item xs={12} md={4} key={i} sx={{ minWidth: { xs: 300, md: 'unset' }, display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={6} sx={{
              p: 3,
              borderRadius: 8,
              bgcolor: '#fff',
              minHeight: 160,
              borderLeft: `8px solid ${p.color}`,
              width: { xs: 280, md: '100%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.03)',
                boxShadow: '0 12px 36px #3949ab22',
                bgcolor: '#f5f7fa',
              }
            }}>
              <Typography variant="h6" fontWeight={700} color={p.color} mb={1}>{p.titulo}</Typography>
              <Typography variant="body1" color="text.secondary">{p.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Partners/tecnologías */}
  <Box sx={{ maxWidth: 900, mx: 'auto', mb: 8, textAlign: 'center', p: 3, borderRadius: 4, background: 'linear-gradient(90deg, #23272f 60%, #3949ab 100%)', boxShadow: 6 }}>
      <Typography variant="h6" fontWeight={700} color="#fff" mb={2} sx={{ textShadow: '0 2px 8px #23272f99' }}>Con tecnología de:</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap' }}>
        {partners.map((p, i) => (
          <Box key={i} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(255,255,255,0.08)',
            borderRadius: 3,
            p: 2,
            minWidth: 120,
            boxShadow: '0 2px 12px #23272f33',
            m: 1
          }}>
            <img src={p.src} alt={p.alt} style={{ height: 38, marginBottom: 8, filter: 'grayscale(0.2)' }} />
            <Typography variant="caption" color="#fff" sx={{ textShadow: '0 1px 4px #23272f' }}>{p.alt}</Typography>
          </Box>
        ))}
      </Box>
    </Box>

    {/* Llamada a la acción final */}
    <Box sx={{
      maxWidth: 900,
      mx: 'auto',
      mb: 8,
      textAlign: 'center',
      p: { xs: 4, md: 8 },
      background: 'linear-gradient(100deg, #283593 0%, #3949ab 40%, #00bcd4 100%)',
      borderRadius: 10,
      color: 'white',
      boxShadow: '0 12px 48px #28359355',
      zIndex: 2,
      position: 'relative',
      border: '2px solid #fff',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s',
      '&:hover': {
        boxShadow: '0 16px 48px #3949ab44',
        borderColor: '#00bcd4'
      }
    }}>
      {/* Icono decorativo animado */}
      <Box sx={{
        position: 'absolute',
        left: -60,
        top: -60,
        width: 180,
        height: 180,
        opacity: 0.10,
        zIndex: 0,
        filter: 'blur(2px)',
        pointerEvents: 'none',
      }}>
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="80" stroke="#fff" strokeWidth="8" fill="none" />
          <circle cx="90" cy="90" r="60" stroke="#00bcd4" strokeWidth="6" fill="none" />
          <circle cx="90" cy="90" r="40" stroke="#fff" strokeWidth="4" fill="none" />
        </svg>
      </Box>
      <Typography variant="h3" fontWeight={900} mb={2} sx={{ letterSpacing: 1, zIndex: 1, position: 'relative' }}>
        ¿Listo para transformar tu negocio?
      </Typography>
      <Typography variant="h6" mb={4} sx={{ zIndex: 1, position: 'relative' }}>
        Únete a cientos de empresas que ya confían en nosotros.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: 'linear-gradient(90deg, #00bcd4 0%, #3949ab 100%)',
          color: '#fff',
          fontWeight: 700,
          px: 6,
          py: 2,
          fontSize: 22,
          borderRadius: 3,
          boxShadow: '0 4px 24px #00bcd455',
          textShadow: '0 2px 8px #28359355',
          letterSpacing: 1,
          transition: 'transform 0.2s, box-shadow 0.2s',
          ':hover': {
            bgcolor: 'linear-gradient(90deg, #3949ab 0%, #00bcd4 100%)',
            transform: 'scale(1.05)',
            boxShadow: '0 8px 32px #00bcd488',
          },
          zIndex: 1,
          position: 'relative',
        }}
        href="/register"
      >
        <span style={{ fontWeight: 900, letterSpacing: 2 }}>COMENZAR AHORA</span>
      </Button>
      {/* Detalle decorativo esquina inferior derecha */}
      <Box sx={{
        position: 'absolute',
        right: -40,
        bottom: -40,
        width: 120,
        height: 120,
        opacity: 0.13,
        zIndex: 0,
        filter: 'blur(1.5px)',
        pointerEvents: 'none',
      }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="100" rx="30" stroke="#fff" strokeWidth="6" fill="none" />
          <rect x="30" y="30" width="60" height="60" rx="16" stroke="#00bcd4" strokeWidth="4" fill="none" />
        </svg>
      </Box>
    </Box>

    {/* Estadísticas - ahora debajo de '¿Cómo empezar?' */}
    <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={8} sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          bgcolor: '#fffde7',
          borderRadius: 8,
          boxShadow: '0 8px 32px #3949ab22',
          transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 16px 48px #3949ab44',
            bgcolor: '#fffbe7',
          }
        }}>
          <PeopleIcon sx={{ fontSize: 54, color: '#3949ab' }} />
          <Box>
            <Typography variant="h6" color="#3949ab">Clientes</Typography>
            <Typography variant="h3" fontWeight={700}>{clientesCount}</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={8} sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          bgcolor: '#e3f2fd',
          borderRadius: 8,
          boxShadow: '0 8px 32px #00bcd422',
          transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 16px 48px #00bcd444',
            bgcolor: '#eaf6fd',
          }
        }}>
          <Inventory2Icon sx={{ fontSize: 54, color: '#00bcd4' }} />
          <Box>
            <Typography variant="h6" color="#00bcd4">Productos</Typography>
            <Typography variant="h3" fontWeight={700}>{productosCount}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>

    {/* Testimonios reales */}
    <Box sx={{ mb: 8 }}>
      <Typography variant="h5" fontWeight={700} textAlign="center" mb={3} color="#3949ab">
        Lo que opinan nuestros clientes
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="stretch">
        {testimonios.map((t, i) => (
          <Paper key={i} elevation={8} sx={{
            p: 3,
            maxWidth: 340,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#fff',
            borderRadius: 8,
            boxShadow: '0 8px 32px #3949ab22',
            transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.03)',
              boxShadow: '0 16px 48px #3949ab44',
              bgcolor: '#f5f7fa',
            }
          }}>
            <Avatar src={t.foto} alt={t.nombre} sx={{ width: 70, height: 70, mb: 1.5, border: '3px solid #00bcd4', transition: 'box-shadow 0.3s', boxShadow: '0 2px 12px #00bcd422' }} />
            <Typography variant="body1" mb={2} sx={{ fontStyle: 'italic', color: '#3949ab' }}>
              “{t.mensaje}”
            </Typography>
            <Typography variant="subtitle2" fontWeight={700}>{t.nombre}</Typography>
            <Typography variant="caption" color="text.secondary">{t.cargo} - {t.empresa}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>

    {/* Footer elegante */}
    <Box component="footer" sx={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      background: 'linear-gradient(90deg, #23272f 0%, #3949ab 100%)',
      color: 'white',
      py: 2,
      textAlign: 'center',
      zIndex: 1000,
      boxShadow: '0 -2px 12px #3949ab44',
      letterSpacing: 1,
      fontWeight: 500,
      fontSize: 16
    }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Sistema de Ventas | Hecho con pasión y dedicación para personas como tú
      </Typography>
    </Box>
      </Box>
    </>
  );
}

export default Dashboard;
