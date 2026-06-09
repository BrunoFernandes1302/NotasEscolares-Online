function mostrarFeedback(msg, tipo) {
  const el = document.getElementById('msg-feedback');
  el.className = `alert alert-${tipo}`;
  el.textContent = msg;
  el.classList.remove('d-none');
}

function cadastrar() {
  const nome  = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value;

  if (!nome || !email || !login || !senha) {
    mostrarFeedback('Preencha todos os campos.', 'danger'); return;
  }
  if (senha.length < 4) {
    mostrarFeedback('A senha deve ter pelo menos 4 caracteres.', 'danger'); return;
  }

  const usuarios = DB.getUsuarios();
  if (usuarios.find(u => u.login === login)) {
    mostrarFeedback('Este login já está em uso. Escolha outro.', 'danger'); return;
  }

  const novoUsuario = {
    id: Date.now().toString(),
    login, senha, nome, email,
    admin: false,
    favoritos: []
  };

  usuarios.push(novoUsuario);
  DB.saveUsuarios(usuarios);
  Auth.setUser(novoUsuario);

  mostrarFeedback('Conta criada com sucesso! Redirecionando...', 'success');
  setTimeout(() => window.location.href = 'index.html', 1200);
}
