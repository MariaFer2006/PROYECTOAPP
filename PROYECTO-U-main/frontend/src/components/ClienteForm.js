import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const ClienteForm = ({ onSubmit }) => {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [telefono, setTelefono] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!nombre || !correo) {
			setError('Nombre y correo son obligatorios');
			return;
		}
		setError('');
		onSubmit({ nombre, correo, telefono });
		setNombre('');
		setCorreo('');
		setTelefono('');
	};

	return (
		<Paper elevation={3} sx={{ p: 3, mb: 3 }}>
			<Typography variant="h6" fontWeight={700} mb={2}>Registrar Cliente</Typography>
			<form onSubmit={handleSubmit}>
				<TextField label="Nombre" fullWidth margin="normal" value={nombre} onChange={e => setNombre(e.target.value)} />
				<TextField label="Correo" type="email" fullWidth margin="normal" value={correo} onChange={e => setCorreo(e.target.value)} />
				<TextField label="Teléfono" fullWidth margin="normal" value={telefono} onChange={e => setTelefono(e.target.value)} />
				{error && <Typography color="error" variant="body2">{error}</Typography>}
				<Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: '#3949ab' }}>Registrar</Button>
			</form>
		</Paper>
	);
};

export default ClienteForm;
