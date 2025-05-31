document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('https://seuservidor.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
  
      if (response.ok) {
        document.getElementById('message').textContent = 'Login bem-sucedido!';
        // Redirecionar, salvar token, etc.
      } else {
        document.getElementById('message').textContent = 'Usuário ou senha inválidos.';
      }
    } catch (error) {
      console.error('Erro:', error);
      document.getElementById('message').textContent = 'Erro ao conectar com o servidor.';
    }
  });