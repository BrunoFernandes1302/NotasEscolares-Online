let todasTurmas = [];

function renderCarousel(turmas) {
  const destaque = turmas.filter(t => t.destaque);
  const inner = document.getElementById('carousel-inner');
  const indicators = document.getElementById('carousel-indicators');
  inner.innerHTML = '';
  indicators.innerHTML = '';

  if (!destaque.length) {
    inner.innerHTML = '<div class="carousel-item active"><div class="carousel-slide" style="background:linear-gradient(135deg,#375868,#5b8fa8)"><div class="carousel-slide-overlay"><h2>Sem turmas em destaque</h2></div></div></div>';
    return;
  }

  destaque.forEach((t, i) => {
    const grad = getTurmaGradient(t.ano);
    const alunos = DB.getAlunos()[t.id] || [];
    const media = calcularMediaTurma(t.id);

    indicators.innerHTML += `<button type="button" data-bs-target="#carouselTurmas" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Slide ${i+1}"></button>`;

    inner.innerHTML += `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <div class="carousel-slide" style="background:${grad}" onclick="window.location.href='detalhes.html?id=${t.id}'">
          <div class="carousel-slide-overlay">
            <span class="badge bg-${getTurnoBadgeClass(t.turno)} badge-turno mb-2">${t.turno}</span>
            <h2>${t.nome}</h2>
            <p>${t.descricao}</p>
            <small class="opacity-75">${alunos.length} aluno(s) · Média ${media}</small>
          </div>
        </div>
      </div>`;
  });
}

function getTurnoBadgeClass(turno) {
  return { 'Manhã': 'warning', 'Tarde': 'info', 'Noite': 'dark' }[turno] || 'secondary';
}

function criarCard(t) {
  const grad = getTurmaGradient(t.ano);
  const alunos = DB.getAlunos()[t.id] || [];
  const media = calcularMediaTurma(t.id);
  const fav = isFavorito(t.id);
  const user = Auth.getUser();

  const favBtn = user ? `
    <button class="btn-fav" id="fav-${t.id}" onclick="event.stopPropagation(); handleFav('${t.id}')" title="${fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
      <i class="fa-${fav ? 'solid' : 'regular'} fa-heart"></i>
    </button>` : '';

  return `
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <div class="turma-card" onclick="window.location.href='detalhes.html?id=${t.id}'">
        <div class="turma-card-header" style="background:${grad}">
          <span class="turma-card-ano">${t.ano}°</span>
          ${favBtn}
          <span class="badge bg-${getTurnoBadgeClass(t.turno)} ms-auto">${t.turno}</span>
        </div>
        <div class="turma-card-body">
          <h5>${t.nome}</h5>
          <p>${t.descricao}</p>
        </div>
        <div class="turma-card-footer">
          <small><i class="fa-solid fa-users me-1"></i>${alunos.length} aluno(s)</small>
          <small><i class="fa-solid fa-chart-bar me-1"></i>Média ${media}</small>
        </div>
      </div>
    </div>`;
}

function renderCards(turmas) {
  const container = document.getElementById('cards-container');
  const vazio = document.getElementById('msg-vazio');
  if (!turmas.length) {
    container.innerHTML = '';
    vazio.style.display = '';
    return;
  }
  vazio.style.display = 'none';
  container.innerHTML = turmas.map(criarCard).join('');
}

function handleFav(turmaId) {
  const btn = document.getElementById('fav-' + turmaId);
  toggleFavorito(turmaId, btn);
}

function pesquisar() {
  const termo = document.getElementById('campoPesquisa').value.trim().toLowerCase();
  if (!termo) { renderCards(todasTurmas); return; }
  renderCards(todasTurmas.filter(t =>
    t.nome.toLowerCase().includes(termo) || t.descricao.toLowerCase().includes(termo)
  ));
}

function limparPesquisa() {
  document.getElementById('campoPesquisa').value = '';
  renderCards(todasTurmas);
}

document.getElementById('campoPesquisa').addEventListener('input', function () {
  if (!this.value.trim()) renderCards(todasTurmas);
});

document.getElementById('campoPesquisa').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') pesquisar();
});

todasTurmas = DB.getTurmas();
renderCarousel(todasTurmas);
renderCards(todasTurmas);
