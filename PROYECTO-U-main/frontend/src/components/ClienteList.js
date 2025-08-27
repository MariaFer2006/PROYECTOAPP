import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ClienteList = ({ clientes }) => (
	<Paper elevation={3} sx={{ p: 3 }}>
		<Typography variant="h6" fontWeight={700} mb={2}>Lista de Clientes</Typography>
		<List>
			{clientes.map((cliente, idx) => (
				<ListItem key={idx} divider>
					<ListItemText primary={cliente.nombre} secondary={`${cliente.correo} ${cliente.telefono ? ' - ' + cliente.telefono : ''}`} />
				</ListItem>
			))}
		</List>
	</Paper>
);

export default ClienteList;
