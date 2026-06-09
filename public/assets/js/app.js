const Auth = {
  getUser()    { return JSON.parse(sessionStorage.getItem('usuario_logado') || 'null'); },
  setUser(u)   { sessionStorage.setItem('usuario_logado', JSON.stringify(u)); },
  logout()     { sessionStorage.removeItem('usuario_logado'); },
  isLoggedIn() { return !!this.getUser(); },
  isAdmin()    { const u = this.getUser(); return !!(u && u.admin); }
};

const DB = {
  getUsuarios()      { return JSON.parse(localStorage.getItem('usuarios') || '[]'); },
  saveUsuarios(list) { localStorage.setItem('usuarios', JSON.stringify(list)); },
  getTurmas()        { return JSON.parse(localStorage.getItem('turmas') || '[]'); },
  saveTurmas(list)   { localStorage.setItem('turmas', JSON.stringify(list)); },
  getAlunos()        { return JSON.parse(localStorage.getItem('alunos') || '{}'); },
  saveAlunos(obj)    { localStorage.setItem('alunos', JSON.stringify(obj)); }
};

function isFavorito(turmaId) {
  const user = Auth.getUser();
  if (!user) return false;
  const u = DB.getUsuarios().find(x => x.id === user.id);
  return u ? (u.favoritos || []).includes(turmaId) : false;
}

function toggleFavorito(turmaId, btnEl) {
  const user = Auth.getUser();
  if (!user) {
    window.location.href = 'login.html';
    return;
  }
  const usuarios = DB.getUsuarios();
  const idx = usuarios.findIndex(x => x.id === user.id);
  if (idx === -1) return;

  const favs = usuarios[idx].favoritos || [];
  const fi = favs.indexOf(turmaId);
  if (fi === -1) favs.push(turmaId);
  else favs.splice(fi, 1);
  usuarios[idx].favoritos = favs;
  DB.saveUsuarios(usuarios);
  Auth.setUser({ ...user, favoritos: favs });

  if (btnEl) atualizarBotaoFav(btnEl, fi === -1);
}

function atualizarBotaoFav(btn, favoritado) {
  const icon = btn.querySelector('i');
  if (favoritado) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    btn.title = 'Remover dos favoritos';
  } else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    btn.title = 'Adicionar aos favoritos';
  }
}

function getTurmaGradient(ano) {
  const g = { 1: 'linear-gradient(135deg,#375868,#5b8fa8)', 2: 'linear-gradient(135deg,#2E7D32,#4CAF50)', 3: 'linear-gradient(135deg,#880E4F,#C2185B)' };
  return g[ano] || g[1];
}

function getTurnoBadge(turno) {
  const c = { 'Manhã': 'warning', 'Tarde': 'info', 'Noite': 'secondary' };
  return c[turno] || 'secondary';
}

function calcularMediaTurma(turmaId) {
  const alunos = (DB.getAlunos()[turmaId] || []);
  if (!alunos.length) return '—';
  const soma = alunos.reduce((s, a) => s + parseFloat(a.media || 0), 0);
  return (soma / alunos.length).toFixed(1);
}

function renderNavbar() {
  const el = document.getElementById('navbar-links');
  if (!el) return;
  const user = Auth.getUser();
  let html = `<a class="nav-link" href="index.html">Início</a>`;
  if (user && user.admin) html += `<a class="nav-link" href="cadastro_itens.html">Gerenciar Turmas</a>`;
  if (user) {
    html += `<a class="nav-link" href="favoritos.html"><i class="fa-solid fa-heart me-1 text-danger"></i>Favoritos</a>`;
    html += `<span class="navbar-text me-2">Olá, <strong>${user.nome.split(' ')[0]}</strong></span>`;
    html += `<button class="btn btn-outline-light btn-sm" onclick="fazerLogout()">Sair</button>`;
  } else {
    html += `<a class="btn btn-outline-light btn-sm" href="login.html">Entrar</a>`;
  }
  el.innerHTML = html;
}

function fazerLogout() {
  Auth.logout();
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', renderNavbar);
