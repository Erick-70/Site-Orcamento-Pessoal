document.getElementById('registerForm').addEventListener('submit', async function(event) {
	event.preventDefault();
	const username = document.getElementById('registerUsername').value;
	const password = document.getElementById('registerPassword').value;

	try {
		const response = await fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		if (response.ok) {
			alert('Registrado com sucesso');
		} else {
			alert('Falha no registro');
		}
	} catch (error) {
		console.error('Erro:', error);
		alert('Erro ao registrar');
	}
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
	event.preventDefault();
	const username = document.getElementById('loginUsername').value;
	const password = document.getElementById('loginPassword').value;

	try {
		const response = await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		if (response.ok) {
			window.location.href = '/orcamento';
		} else {
			alert('Login falhou');
		}
	} catch (error) {
		console.error('Erro:', error);
		alert('Erro ao fazer login');
	}
});