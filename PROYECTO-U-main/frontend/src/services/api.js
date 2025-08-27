const API_URL = 'http://localhost:4000/api';

// Clientes
export async function getClientes() {
	const res = await fetch(`${API_URL}/clientes`);
	return res.json();
}

export async function addCliente(cliente) {
	const res = await fetch(`${API_URL}/clientes`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(cliente),
	});
	return res.json();
}

// Productos
export async function getProductos() {
	const res = await fetch(`${API_URL}/productos`);
	return res.json();
}

export async function addProducto(producto) {
	const res = await fetch(`${API_URL}/productos`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(producto),
	});
	return res.json();
}

// Usuarios
export async function registerUsuario(usuario) {
  const res = await fetch(`${API_URL}/usuarios/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario),
  });
  return res.json();
}

export async function loginUsuario({ correo, password }) {
  const res = await fetch(`${API_URL}/usuarios/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, password }),
  });
  return res.json();
}
