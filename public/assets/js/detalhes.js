const NOTAS_CAMPOS = ['matematica','portugues','historia','geografia','fisica','biologia','filosofia','sociologia','ingles','redacao'];
const NOTAS_LABELS = ['Matemática','Língua Portuguesa','História','Geografia','Física','Biologia','Filosofia','Sociologia','Inglês','Redação'];

let turmaId, modalAluno, modalFormAluno, editandoIdx;

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  turmaId = params.get('id');
  modalAluno    = new bootstrap.Modal(document.getElementById('modalAluno'));
  modalFormAluno = new bootstrap.Modal(document.getElementById('modalFormAluno'));
  renderPagina();
});

function getTurma() { return DB.getTurmas().find(t => t.id === turmaId); }

function renderPagina() {
  const turma = getTurma();
  const container = document.getElementById('pagina-detalhes');

  if (!turma) {
    container.innerHTML = `<div class="alert alert-warning mt-4">Turma não encontrada. <a href="index.html">Voltar</a></div>`;
    return;
  }

  document.title = turma.nome + ' — Notas Escolares';
  const grad = getTurmaGradient(turma.ano);
  const alunos = DB.getAlunos()[turmaId] || [];
  const media = calcularMediaTurma(turmaId);
  const fav = isFavorito(turmaId);
  const user = Auth.getUser();

  const favBtn = user ? `
    <button class="btn btn-lg ms-2" id="btn-fav-detalhe" style="background:none;border:none;color:#fff;font-size:1.5rem" onclick="handleFavDetalhe()" title="${fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
      <i class="fa-${fav ? 'solid' : 'regular'} fa-heart" style="${fav ? 'color:#e74c3c' : 'color:rgba(255,255,255,.7)'}"></i>
    </button>` : '';

  container.innerHTML = `
    <!-- Header turma -->
    <div class="rounded-3 mb-4 p-4 text-white d-flex flex-wrap align-items-center gap-3" style="background:${grad}">
      <div class="flex-grow-1">
        <div class="d-flex align-items-center gap-2 mb-1">
          <span class="badge bg-${getTurnoBadge(turma.turno)} fs-6">${turma.turno}</span>
          ${turma.destaque ? '<span class="badge bg-warning text-dark"><i class="fa-solid fa-star me-1"></i>Destaque</span>' : ''}
        </div>
        <h1 class="fw-800 mb-1" style="font-size:2rem;font-weight:800">${turma.nome}</h1>
        <p class="mb-0 opacity-90">${turma.descricao}</p>
      </div>
      <div class="d-flex align-items-center">
        ${favBtn}
        <a href="index.html" class="btn btn-outline-light btn-sm ms-2"><i class="fa-solid fa-arrow-left me-1"></i>Voltar</a>
      </div>
    </div>

    <!-- Stats -->
    <div class="turma-stats mb-4">
      <div class="stat-box">
        <div class="stat-val">${alunos.length}</div>
        <div class="stat-lbl">Alunos</div>
      </div>
      <div class="stat-box">
        <div class="stat-val">${media}</div>
        <div class="stat-lbl">Média Geral</div>
      </div>
      <div class="stat-box">
        <div class="stat-val">${turma.ano}º</div>
        <div class="stat-lbl">Ano</div>
      </div>
      <div class="stat-box">
        <div class="stat-val">${turma.secao || turma.id.slice(-1)}</div>
        <div class="stat-lbl">Seção</div>
      </div>
    </div>

    <!-- Lista alunos -->
    <div class="bg-white rounded-3 shadow-sm">
      <div class="d-flex align-items-center justify-content-between p-3 border-bottom">
        <h5 class="mb-0 fw-bold" style="color:var(--cor-principal)"><i class="fa-solid fa-users me-2"></i>Alunos da Turma</h5>
        ${Auth.isAdmin() ? `<button class="btn btn-success btn-sm fw-bold" onclick="abrirFormNovo()"><i class="fa-solid fa-plus me-1"></i>Adicionar Aluno</button>` : ''}
      </div>
      <div id="lista-alunos"></div>
    </div>`;

  renderListaAlunos();
}

function renderListaAlunos() {
  const todosAlunos = DB.getAlunos()[turmaId] || [];
  const alunos = todosAlunos.slice().sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto, 'pt-BR'));
  const container = document.getElementById('lista-alunos');
  if (!container) return;

  if (!alunos.length) {
    container.innerHTML = '<p class="text-muted text-center p-4">Nenhum aluno nesta turma.</p>';
    return;
  }

  container.innerHTML = alunos.map((a, i) => {
    const idx = todosAlunos.indexOf(a);
    const foto = a.foto || (a.genero === 'Feminino' ? 'imagens/foto_mulher_generica.png' : 'imagens/foto_de_homem_generica.png');
    const acoes = Auth.isAdmin() ? `
      <button class="btn btn-sm btn-warning me-1" onclick="abrirFormEditar(${idx})"><i class="fa-solid fa-pen"></i></button>
      <button class="btn btn-sm btn-danger" onclick="excluirAluno(${idx})"><i class="fa-solid fa-trash"></i></button>` : '';

    return `
      <div class="aluno-item" style="cursor:pointer" onclick="verAluno(${idx})">
        <img src="${foto}" alt="" style="width:40px;height:40px;border-radius:50%;object-fit:cover;margin-right:12px;border:2px solid var(--cor-principal)">
        <div class="flex-grow-1">
          <div class="aluno-nome">${a.nomeCompleto}</div>
          <div class="aluno-sub">Matrícula: ${a.matricula} · Média: ${a.media} · Destaque: ${a.destaque}</div>
        </div>
        <div onclick="event.stopPropagation()">${acoes}</div>
      </div>`;
  }).join('');
}

function verAluno(idx) {
  const aluno = (DB.getAlunos()[turmaId] || [])[idx];
  if (!aluno) return;
  const foto = aluno.foto || (aluno.genero === 'Feminino' ? 'imagens/foto_mulher_generica.png' : 'imagens/foto_de_homem_generica.png');

  document.getElementById('modalAlunoTitulo').textContent = aluno.nomeCompleto;
  document.getElementById('modalAlunoBody').innerHTML = `
    <div class="row">
      <div class="col-auto">
        <img src="${foto}" alt="" style="width:90px;height:90px;border-radius:50%;object-fit:cover;border:3px solid var(--cor-principal)">
      </div>
      <div class="col">
        <p class="mb-1"><strong>CPF:</strong> ${aluno.cpf}</p>
        <p class="mb-1"><strong>Matrícula:</strong> ${aluno.matricula}</p>
        <p class="mb-1"><strong>E-mail:</strong> ${aluno.email}</p>
        <p class="mb-1"><strong>Gênero:</strong> ${aluno.genero}</p>
        <p class="mb-1"><strong>Média Geral:</strong> <span class="badge bg-primary">${aluno.media}</span></p>
        <p class="mb-0"><strong>Destaque:</strong> ${aluno.destaque}</p>
      </div>
    </div>
    <hr>
    <h6 class="fw-bold mb-2" style="color:var(--cor-principal)">Notas</h6>
    <div class="notas-grid">
      ${NOTAS_CAMPOS.map((c, i) => `
        <div class="d-flex justify-content-between border rounded px-2 py-1">
          <span class="text-muted small">${NOTAS_LABELS[i]}</span>
          <strong>${aluno.notas[c] ?? '—'}</strong>
        </div>`).join('')}
    </div>`;

  document.getElementById('modalAlunoFooter').innerHTML = Auth.isAdmin() ? `
    <button class="btn btn-warning" onclick="modalAluno.hide(); abrirFormEditar(${idx})"><i class="fa-solid fa-pen me-1"></i>Editar</button>
    <button class="btn btn-danger" onclick="modalAluno.hide(); excluirAluno(${idx})"><i class="fa-solid fa-trash me-1"></i>Excluir</button>` : '';

  modalAluno.show();
}

function abrirFormNovo() {
  editandoIdx = null;
  document.getElementById('formAlunoTitulo').textContent = 'Adicionar Aluno — Turma ' + turmaId;
  NOTAS_CAMPOS.forEach(c => { document.getElementById('a-' + c).value = ''; });
  ['nome','nomeCompleto','cpf','matricula','email','destaque','media'].forEach(f => {
    document.getElementById('a-' + f).value = '';
  });
  document.getElementById('a-genero').value = 'Masculino';
  modalFormAluno.show();
}

function abrirFormEditar(idx) {
  const aluno = (DB.getAlunos()[turmaId] || [])[idx];
  if (!aluno) return;
  editandoIdx = idx;
  document.getElementById('formAlunoTitulo').textContent = 'Editar — ' + aluno.nomeCompleto;

  document.getElementById('a-nome').value = aluno.nome || '';
  document.getElementById('a-nomeCompleto').value = aluno.nomeCompleto;
  document.getElementById('a-cpf').value = aluno.cpf || '';
  document.getElementById('a-matricula').value = aluno.matricula || '';
  document.getElementById('a-email').value = aluno.email || '';
  document.getElementById('a-genero').value = aluno.genero || 'Masculino';
  document.getElementById('a-destaque').value = aluno.destaque || '';
  NOTAS_CAMPOS.forEach(c => { document.getElementById('a-' + c).value = aluno.notas[c] || ''; });
  recalcMedia();
  modalFormAluno.show();
}

function recalcMedia() {
  const soma = NOTAS_CAMPOS.reduce((s, c) => s + (parseFloat(document.getElementById('a-' + c).value) || 0), 0);
  document.getElementById('a-media').value = (soma / NOTAS_CAMPOS.length).toFixed(1);
}

function salvarAluno() {
  const nomeCompleto = document.getElementById('a-nomeCompleto').value.trim();
  if (!nomeCompleto) { alert('Nome completo é obrigatório.'); return; }

  recalcMedia();
  const notas = {};
  NOTAS_CAMPOS.forEach(c => { notas[c] = document.getElementById('a-' + c).value.trim(); });

  const genero = document.getElementById('a-genero').value;
  const aluno = {
    nome: document.getElementById('a-nome').value.trim() || nomeCompleto.split(' ')[0],
    nomeCompleto,
    cpf:      document.getElementById('a-cpf').value.trim(),
    matricula:document.getElementById('a-matricula').value.trim(),
    email:    document.getElementById('a-email').value.trim(),
    genero,
    destaque: document.getElementById('a-destaque').value.trim(),
    media:    document.getElementById('a-media').value,
    foto:     genero === 'Feminino' ? 'imagens/foto_mulher_generica.png' : 'imagens/foto_de_homem_generica.png',
    notas
  };

  const todosAlunos = DB.getAlunos();
  if (!todosAlunos[turmaId]) todosAlunos[turmaId] = [];

  if (editandoIdx !== null) todosAlunos[turmaId][editandoIdx] = aluno;
  else todosAlunos[turmaId].push(aluno);

  DB.saveAlunos(todosAlunos);
  modalFormAluno.hide();
  renderPagina();
}

function excluirAluno(idx) {
  const aluno = (DB.getAlunos()[turmaId] || [])[idx];
  if (!confirm(`Excluir o aluno "${aluno.nomeCompleto}"?`)) return;
  const todosAlunos = DB.getAlunos();
  todosAlunos[turmaId].splice(idx, 1);
  DB.saveAlunos(todosAlunos);
  renderPagina();
}

function handleFavDetalhe() {
  const btn = document.getElementById('btn-fav-detalhe');
  const icon = btn.querySelector('i');
  const eraFav = icon.classList.contains('fa-solid');
  toggleFavorito(turmaId, btn);
  icon.style.color = eraFav ? 'rgba(255,255,255,.7)' : '#e74c3c';
}
