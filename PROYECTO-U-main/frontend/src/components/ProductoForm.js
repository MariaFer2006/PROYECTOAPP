import React, { useState } from 'react';

const ProductoForm = ({ onSubmit }) => {
	const [nombre, setNombre] = useState('');
	const [precio, setPrecio] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!nombre || !precio) {
			setError('Nombre y precio son obligatorios');
			return;
		}
		setError('');
		onSubmit({ nombre, precio });
		setNombre('');
		setPrecio('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Agregar Producto</h2>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
			<input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
			<button type="submit">Agregar</button>
		</form>
	);
};

export default ProductoForm;
