import React from 'react';

const ProductoList = ({ productos }) => (
	<div>
		<h2>Lista de Productos</h2>
		<ul>
			{productos.map((producto, idx) => (
				<li key={idx}>{producto.nombre} - ${producto.precio}</li>
			))}
		</ul>
	</div>
);

export default ProductoList;
