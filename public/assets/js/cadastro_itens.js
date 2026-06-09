if (!Auth.isAdmin()) window.location.href = 'index.html';

let editandoId = null;
let modalBS;

document.addEventListener('DOMContentLoaded', () => {
  modalBS = new bootstrap.Modal(document.getElementById('modalTurma'));
  renderTabela();
});

function renderTabela() {
  const turmas = DB.getTurmas();
  const alunos = DB.getAlunos();
  const tbody = document.getElementById('tbody-turmas');
  tbody.innerHTML = turmas.map(t => {
    const qtd = (alunos[t.id] || []).length;
    return `
      <tr>
        <td><span class="badge" style="background:var(--cor-principal)">${t.id}</span></td>
        <td><strong>${t.nome}</strong></td>
        <td><span class="badge bg-${getTurnoBadge(t.turno)}">${t.turno}</span></td>
        <td>${t.ano}º Ano</td>
        <td class="text-center">
          ${t.destaque ? '<i class="fa-solid fa-star text-warning"></i>' : '<i class="fa-regular fa-star text-muted"></i>'}
        </td>
        <td>${qtd} aluno(s)</td>
        <td class="text-center">
          <button class="btn btn-sm btn-warning me-1" onclick="abrirModalEditar('${t.id}')">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-sm btn-outline-secondary me-1" onclick="window.location.href='detalhes.html?id=${t.id}'">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="excluirTurma('${t.id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>`;
  }).join('') || '<tr><td colspan="7" class="text-center text-muted">Nenhuma turma cadastrada.</td></tr>';
}

function abrirModalNova() {
  editandoId = null;
  document.getElementById('modalTituloTurma').textContent = 'Nova Turma';
  document.getElementById('t-id').disabled = false;
  ['id','nome','secao','descricao'].forEach(f => document.getElementById('t-' + f).value = '');
  document.getElementById('t-turno').value = 'Manhã';
  document.getElementById('t-ano').value = '1';
  document.getElementById('t-destaque').checked = false;
  modalBS.show();
}

function abrirModalEditar(id) {
  const t = DB.getTurmas().find(x => x.id === id);
  if (!t) return;
  editandoId = id;
  document.getElementById('modalTituloTurma').textContent = 'Editar Turma — ' + t.nome;
  document.getElementById('t-id').value = t.id;
  document.getElementById('t-id').disabled = true;
  document.getElementById('t-nome').value = t.nome;
  document.getElementById('t-secao').value = t.secao || '';
  document.getElementById('t-turno').value = t.turno;
  document.getElementById('t-ano').value = String(t.ano);
  document.getElementById('t-destaque').checked = !!t.destaque;
  document.getElementById('t-descricao').value = t.descricao;
  modalBS.show();
}

function salvarTurma() {
  const id       = editandoId || document.getElementById('t-id').value.trim().toUpperCase();
  const nome     = document.getElementById('t-nome').value.trim();
  const descricao= document.getElementById('t-descricao').value.trim();
  const turno    = document.getElementById('t-turno').value;
  const ano      = parseInt(document.getElementById('t-ano').value);
  const secao    = document.getElementById('t-secao').value.trim();
  const destaque = document.getElementById('t-destaque').checked;

  if (!id || !nome || !descricao) {
    alert('Preencha ID, nome e descrição.'); return;
  }

  const turmas = DB.getTurmas();
  const alunos = DB.getAlunos();

  if (editandoId) {
    const idx = turmas.findIndex(t => t.id === editandoId);
    if (idx !== -1) turmas[idx] = { ...turmas[idx], nome, descricao, turno, ano, secao, destaque };
  } else {
    if (turmas.find(t => t.id === id)) {
      alert('Já existe uma turma com este ID.'); return;
    }
    turmas.push({ id, nome, descricao, turno, ano, secao, destaque });
    if (!alunos[id]) { alunos[id] = []; DB.saveAlunos(alunos); }
  }

  DB.saveTurmas(turmas);
  modalBS.hide();
  renderTabela();
}

function excluirTurma(id) {
  const t = DB.getTurmas().find(x => x.id === id);
  if (!confirm(`Excluir a turma "${t.nome}"? Os alunos desta turma também serão removidos.`)) return;
  DB.saveTurmas(DB.getTurmas().filter(x => x.id !== id));
  const alunos = DB.getAlunos();
  delete alunos[id];
  DB.saveAlunos(alunos);
  renderTabela();
}
