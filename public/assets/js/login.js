if (Auth.isLoggedIn()) window.location.href = 'index.html';

function entrar() {
  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value;
  const erro  = document.getElementById('msg-erro');

  if (!login || !senha) {
    erro.textContent = 'Preencha login e senha.';
    erro.classList.remove('d-none');
    return;
  }

  const usuario = DB.getUsuarios().find(u => u.login === login && u.senha === senha);
  if (!usuario) {
    erro.textContent = 'Login ou senha incorretos.';
    erro.classList.remove('d-none');
    return;
  }

  Auth.setUser(usuario);
  window.location.href = 'index.html';
}
