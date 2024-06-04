document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000/api/clientes';
    const clientesDiv = document.getElementById('clientes');
  
    axios.get(API_URL)
      .then(response => {
        const clientes = response.data;
        let html = '<ul class="list-group mt-3">';
        clientes.forEach(cliente => {
          html += `
            <li class="list-group-item">
              <strong>Nome:</strong> ${cliente.nome}<br>
              <strong>Email:</strong> ${cliente.email}<br>
              <strong>Telefone:</strong> ${cliente.telefone}<br>
              <strong>Endereço:</strong> ${cliente.endereco}
            </li>
          `;
        });
        html += '</ul>';
        clientesDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Erro ao buscar clientes:', error);
        clientesDiv.innerHTML = '<p class="text-danger">Erro ao buscar clientes</p>';
      });
  });
  