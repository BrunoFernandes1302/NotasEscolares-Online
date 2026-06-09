if (!Auth.isLoggedIn()) window.location.href = 'login.html';

function getTurnoBadgeClass(turno) {
  return { 'Manhã': 'warning', 'Tarde': 'info', 'Noite': 'dark' }[turno] || 'secondary';
}

function removerFav(turmaId, btn) {
  if (!confirm('Remover esta turma dos favoritos?')) return;
  toggleFavorito(turmaId, btn);
  renderFavoritos();
}

function renderFavoritos() {
  const user = Auth.getUser();
  const usuarios = DB.getUsuarios();
  const userData = usuarios.find(u => u.id === user.id);
  const favIds = (userData && userData.favoritos) || [];
  const turmas = DB.getTurmas().filter(t => favIds.includes(t.id));

  const container = document.getElementById('favoritos-container');
  const vazio     = document.getElementById('msg-vazio');

  if (!turmas.length) {
    container.innerHTML = '';
    vazio.classList.remove('d-none');
    return;
  }

  vazio.classList.add('d-none');
  container.innerHTML = turmas.map(t => {
    const grad  = getTurmaGradient(t.ano);
    const alunos = DB.getAlunos()[t.id] || [];
    const media  = calcularMediaTurma(t.id);

    return `
      <div class="col-sm-6 col-lg-4 col-xl-3">
        <div class="turma-card">
          <div class="turma-card-header" style="background:${grad};cursor:pointer" onclick="window.location.href='detalhes.html?id=${t.id}'">
            <span class="turma-card-ano">${t.ano}°</span>
            <button class="btn-fav" id="fav-${t.id}" onclick="event.stopPropagation(); removerFav('${t.id}', this)" title="Remover dos favoritos">
              <i class="fa-solid fa-heart" style="color:#e74c3c"></i>
            </button>
            <span class="badge bg-${getTurnoBadgeClass(t.turno)} ms-auto">${t.turno}</span>
          </div>
          <div class="turma-card-body" style="cursor:pointer" onclick="window.location.href='detalhes.html?id=${t.id}'">
            <h5>${t.nome}</h5>
            <p>${t.descricao}</p>
          </div>
          <div class="turma-card-footer">
            <small><i class="fa-solid fa-users me-1"></i>${alunos.length} aluno(s)</small>
            <small><i class="fa-solid fa-chart-bar me-1"></i>Média ${media}</small>
          </div>
        </div>
      </div>`;
  }).join('');
}

renderFavoritos();
