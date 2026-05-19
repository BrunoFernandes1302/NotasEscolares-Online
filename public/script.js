// Informações dos alunos
const turmas = {
    "1A": [
        {
            nome: "Carlos",
            nomeCompleto: "Carlos Eduardo da Silva",
            cpf: "123.456.789-10",
            matricula: "16475298",
            email: "carlos1a@gmail.com",
            media: "6.9",
            destaque: "Matemática",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "9.5",
                portugues: "6",
                historia: "5",
                geografia: "7.5",
                fisica: "8.3",
                biologia: "6.8",
                filosofia: "4",
                sociologia: "6.1",
                ingles: "7.2",
                redacao: "9"
            }
        },
        {
            nome: "Ana",
            nomeCompleto: "Ana Souza",
            cpf: "987.654.321-00",
            matricula: "123456",
            email: "ana1a@gmail.com",
            media: "8.5",
            destaque: "Português",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "8",
                portugues: "9",
                historia: "7",
                geografia: "8",
                fisica: "7",
                biologia: "8",
                filosofia: "9",
                sociologia: "8",
                ingles: "9",
                redacao: "10"
            }
        },
        {
            nome: "Lucas",
            nomeCompleto: "Lucas Pereira Lima",
            cpf: "321.654.987-11",
            matricula: "111222",
            email: "lucas1a@gmail.com",
            media: "7.2",
            destaque: "Física",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "7",
                portugues: "6",
                historia: "7",
                geografia: "7",
                fisica: "9",
                biologia: "8",
                filosofia: "6",
                sociologia: "7",
                ingles: "8",
                redacao: "7"
            }
        }
    ],

    "1B": [
        {
            nome: "Mariana",
            nomeCompleto: "Mariana Alves Rocha",
            cpf: "222.333.444-55",
            matricula: "222111",
            email: "mariana1b@gmail.com",
            media: "9.1",
            destaque: "Redação",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "8",
                portugues: "10",
                historia: "9",
                geografia: "9",
                fisica: "8",
                biologia: "9",
                filosofia: "9",
                sociologia: "10",
                ingles: "9",
                redacao: "10"
            }
        },
        {
            nome: "Pedro",
            nomeCompleto: "Pedro Henrique Costa",
            cpf: "555.666.777-88",
            matricula: "333444",
            email: "pedro1b@gmail.com",
            media: "6.5",
            destaque: "Geografia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "5",
                portugues: "6",
                historia: "7",
                geografia: "9",
                fisica: "6",
                biologia: "7",
                filosofia: "6",
                sociologia: "5",
                ingles: "7",
                redacao: "6"
            }
        },
        {
            nome: "Juliana",
            nomeCompleto: "Juliana Martins",
            cpf: "999.888.777-66",
            matricula: "555666",
            email: "juliana1b@gmail.com",
            media: "7.8",
            destaque: "Biologia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "7",
                portugues: "8",
                historia: "7",
                geografia: "8",
                fisica: "6",
                biologia: "10",
                filosofia: "8",
                sociologia: "7",
                ingles: "8",
                redacao: "9"
            }
        }
    ],

    "1C": [
        {
            nome: "Rafael",
            nomeCompleto: "Rafael Gomes",
            cpf: "111.222.333-44",
            matricula: "777888",
            email: "rafael1c@gmail.com",
            media: "7.0",
            destaque: "História",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "6",
                portugues: "7",
                historia: "9",
                geografia: "8",
                fisica: "6",
                biologia: "7",
                filosofia: "8",
                sociologia: "7",
                ingles: "6",
                redacao: "7"
            }
        },
        {
            nome: "Fernanda",
            nomeCompleto: "Fernanda Ribeiro",
            cpf: "444.555.666-77",
            matricula: "888999",
            email: "fernanda1c@gmail.com",
            media: "8.3",
            destaque: "Inglês",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "7",
                portugues: "8",
                historia: "8",
                geografia: "7",
                fisica: "7",
                biologia: "8",
                filosofia: "8",
                sociologia: "8",
                ingles: "10",
                redacao: "9"
            }
        },
        {
            nome: "Bruno",
            nomeCompleto: "Bruno Oliveira",
            cpf: "777.666.555-44",
            matricula: "999000",
            email: "bruno1c@gmail.com",
            media: "10",
            destaque: "Todas",
            foto: "imagens/foto_de_homem_generica.png",
            notas: {
                matematica: "10",
                portugues: "10",
                historia: "10",
                geografia: "10",
                fisica: "10",
                biologia: "10",
                filosofia: "10",
                sociologia: "10",
                ingles: "10",
                redacao: "10"
            }
        }
    ],

    "2A": [
        {
            nome: "Gabriel",
            nomeCompleto: "Gabriel Santos",
            cpf: "123.123.123-12",
            matricula: "101010",
            email: "gabriel2a@gmail.com",
            media: "7.5",
            destaque: "Matemática",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"9", portugues:"7", historia:"6", geografia:"7", fisica:"8", biologia:"7", filosofia:"6", sociologia:"7", ingles:"8", redacao:"7"}
        },
        {
            nome: "Larissa",
            nomeCompleto: "Larissa Teixeira",
            cpf: "321.321.321-32",
            matricula: "202020",
            email: "larissa2a@gmail.com",
            media: "8.0",
            destaque: "Português",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"7", portugues:"9", historia:"8", geografia:"8", fisica:"7", biologia:"8", filosofia:"8", sociologia:"8", ingles:"9", redacao:"9"}
        },
        {
            nome: "Felipe",
            nomeCompleto: "Felipe Andrade",
            cpf: "456.456.456-45",
            matricula: "303030",
            email: "felipe2a@gmail.com",
            media: "6.7",
            destaque: "Física",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"7", portugues:"6", historia:"6", geografia:"6", fisica:"9", biologia:"7", filosofia:"6", sociologia:"6", ingles:"7", redacao:"7"}
        }
    ],

    "2B": [
        {
            nome: "Camila",
            nomeCompleto: "Camila Duarte",
            cpf: "789.789.789-78",
            matricula: "404040",
            email: "camila2b@gmail.com",
            media: "8.9",
            destaque: "Redação",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"8", portugues:"9", historia:"9", geografia:"9", fisica:"8", biologia:"9", filosofia:"9", sociologia:"9", ingles:"9", redacao:"10"}
        },
        {
            nome: "Diego",
            nomeCompleto: "Diego Lopes",
            cpf: "654.654.654-65",
            matricula: "505050",
            email: "diego2b@gmail.com",
            media: "6.4",
            destaque: "Geografia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"5", portugues:"6", historia:"7", geografia:"9", fisica:"6", biologia:"6", filosofia:"6", sociologia:"5", ingles:"6", redacao:"6"}
        },
        {
            nome: "Patricia",
            nomeCompleto: "Patricia Nunes",
            cpf: "987.987.987-98",
            matricula: "606060",
            email: "patricia2b@gmail.com",
            media: "7.7",
            destaque: "Biologia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"7", portugues:"8", historia:"7", geografia:"8", fisica:"7", biologia:"10", filosofia:"8", sociologia:"7", ingles:"8", redacao:"8"}
        }
    ],

    "2C": [
        {
            nome: "Henrique",
            nomeCompleto: "Henrique Barros",
            cpf: "111.444.777-00",
            matricula: "707070",
            email: "henrique2c@gmail.com",
            media: "7.1",
            destaque: "História",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"6", portugues:"7", historia:"9", geografia:"8", fisica:"6", biologia:"7", filosofia:"7", sociologia:"7", ingles:"6", redacao:"7"}
        },
        {
            nome: "Beatriz",
            nomeCompleto: "Beatriz Castro",
            cpf: "222.555.888-11",
            matricula: "808080",
            email: "beatriz2c@gmail.com",
            media: "8.4",
            destaque: "Inglês",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"7", portugues:"8", historia:"8", geografia:"7", fisica:"7", biologia:"8", filosofia:"8", sociologia:"8", ingles:"10", redacao:"9"}
        },
        {
            nome: "João",
            nomeCompleto: "João Pedro Melo",
            cpf: "333.666.999-22",
            matricula: "909090",
            email: "joao2c@gmail.com",
            media: "6.9",
            destaque: "Sociologia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"6", portugues:"7", historia:"6", geografia:"7", fisica:"6", biologia:"7", filosofia:"7", sociologia:"9", ingles:"6", redacao:"7"}
        },
        {
            nome: "João Aguiar",
            nomeCompleto: "João Pedro Aguiar",
            cpf: "333.666.999-11",
            matricula: "909090",
            email: "joao2c@gmail.com",
            media: "6.9",
            destaque: "Sociologia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"6", portugues:"7", historia:"6", geografia:"7", fisica:"6", biologia:"7", filosofia:"7", sociologia:"9", ingles:"6", redacao:"7"}
        }
    ],

    "3A": [
        {
            nome: "Eduardo",
            nomeCompleto: "Eduardo Farias",
            cpf: "444.777.000-33",
            matricula: "111111",
            email: "eduardo3a@gmail.com",
            media: "7.9",
            destaque: "Matemática",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"10", portugues:"7", historia:"7", geografia:"7", fisica:"9", biologia:"7", filosofia:"7", sociologia:"7", ingles:"8", redacao:"8"}
        },
        {
            nome: "Sofia",
            nomeCompleto: "Sofia Mendes",
            cpf: "555.888.111-44",
            matricula: "222222",
            email: "sofia3a@gmail.com",
            media: "9.0",
            destaque: "Português",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"8", portugues:"10", historia:"9", geografia:"9", fisica:"8", biologia:"9", filosofia:"9", sociologia:"9", ingles:"9", redacao:"10"}
        },
        {
            nome: "André",
            nomeCompleto: "André Silva",
            cpf: "666.999.222-55",
            matricula: "333333",
            email: "andre3a@gmail.com",
            media: "6.8",
            destaque: "Física",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"7", portugues:"6", historia:"6", geografia:"6", fisica:"9", biologia:"7", filosofia:"6", sociologia:"6", ingles:"7", redacao:"7"}
        }
    ],

    "3B": [
        {
            nome: "Lucas",
            nomeCompleto: "Lucas Vieira",
            cpf: "777.000.333-66",
            matricula: "444444",
            email: "lucas3b@gmail.com",
            media: "7.3",
            destaque: "Geografia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"6", portugues:"7", historia:"7", geografia:"9", fisica:"6", biologia:"7", filosofia:"7", sociologia:"7", ingles:"7", redacao:"7"}
        },
        {
            nome: "Aline",
            nomeCompleto: "Aline Barbosa",
            cpf: "888.111.444-77",
            matricula: "555555",
            email: "aline3b@gmail.com",
            media: "8.6",
            destaque: "Biologia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"8", portugues:"9", historia:"8", geografia:"8", fisica:"7", biologia:"10", filosofia:"9", sociologia:"8", ingles:"9", redacao:"9"}
        },
        {
            nome: "Renato",
            nomeCompleto: "Renato Alves",
            cpf: "999.222.555-88",
            matricula: "666666",
            email: "renato3b@gmail.com",
            media: "6.6",
            destaque: "Sociologia",
            foto: "imagens/foto_de_homem_generica.png",
            notas: { matematica:"6", portugues:"6", historia:"6", geografia:"6", fisica:"6", biologia:"7", filosofia:"7", sociologia:"9", ingles:"6", redacao:"7"}
        }
    ]
};

const FOTO_MASCULINO = "imagens/foto_de_homem_generica.png";
const FOTO_FEMININO  = "imagens/foto_mulher_generica.png";

const NOMES_FEMININOS = new Set([
    "Ana","Mariana","Juliana","Fernanda","Larissa","Camila","Patricia","Beatriz",
    "Sofia","Aline","Amanda","Bruna","Carolina","Daniela","Elisa","Gabriela",
    "Isabela","Joana","Katia","Leticia","Monica","Natalia","Olivia","Paula",
    "Renata","Sabrina","Tatiana","Vanessa","Yasmin","Maria","Clara","Alice",
    "Livia","Luisa","Rita","Sandra","Vera","Angela","Claudia","Cristina",
    "Debora","Elena","Flavia","Giovanna","Helena","Ingrid","Jessica","Luana",
    "Melissa","Nina","Rafaela","Silvia","Teresa","Viviane","Wanda","Patrícia",
    "Júlia","Julia","Laura","Carla","Lara","Nadia","Nádia","Priscila","Roberta",
    "Samara","Simone","Tania","Tânia","Vitoria","Vitória","Zelia","Zélia"
]);

function inferirGenero(nome) {
    const primeiroNome = nome.trim().split(/\s+/)[0];
    return NOMES_FEMININOS.has(primeiroNome) ? "Feminino" : "Masculino";
}

// Inicializa genero e foto padrão para todos os alunos existentes
for (const turma in turmas) {
    turmas[turma].forEach(aluno => {
        if (!aluno.genero) {
            aluno.genero = inferirGenero(aluno.nome);
        }
        if (aluno.foto === FOTO_MASCULINO && aluno.genero === "Feminino") {
            aluno.foto = FOTO_FEMININO;
        }
    });
}

let modalTurma = null;
let modalIndex = null;
let modalFotoDataUrl = null;

function voltarInicio() {
    document.getElementById("conteudo-inicial").style.display = "flex";
    document.getElementById("nomes_alunos").style.display = "none";
    document.getElementById("informacoes_alunos").style.display = "none";
    document.getElementById("notas_alunos").style.display = "none";
}

function previewFoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            modalFotoDataUrl = e.target.result;
            document.getElementById("m_foto_preview").src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function removerFoto() {
    modalFotoDataUrl = null;
    document.getElementById("m_foto").value = "";
    const genero = document.getElementById("m_genero").value;
    document.getElementById("m_foto_preview").src = genero === "Feminino" ? FOTO_FEMININO : FOTO_MASCULINO;
}

function criarItemAluno(aluno, turma) {
    const item = document.createElement("div");
    item.className = "aluno_item";

    const info = document.createElement("div");
    info.className = "aluno_info";

    const nomeEl = document.createElement("span");
    nomeEl.className = "aluno_nome_completo";
    nomeEl.textContent = aluno.nomeCompleto;

    const matriculaEl = document.createElement("span");
    matriculaEl.className = "aluno_matricula_txt";
    matriculaEl.textContent = "Matrícula: " + aluno.matricula;

    info.appendChild(nomeEl);
    info.appendChild(matriculaEl);

    const btnVerMais = document.createElement("button");
    btnVerMais.className = "btn_ver_mais";
    btnVerMais.textContent = "Ver mais →";
    btnVerMais.onclick = () => {
        window.location.href = `detalhes.html?turma=${turma}&cpf=${encodeURIComponent(aluno.cpf)}`;
    };

    item.appendChild(info);
    item.appendChild(btnVerMais);
    return item;
}

function carregarTurma(turma) {
    const container = document.getElementById("nomes_alunos");
    if (!container) return;

    document.getElementById("conteudo-inicial").style.display = "none";
    container.style.display = "flex";
    container.innerHTML = "";

    if (!turmas[turma]) {
        container.innerHTML = "<p>Turma não encontrada</p>";
        return;
    }

    const btnAdicionar = document.createElement("button");
    btnAdicionar.className = "btn_adicionar_aluno";
    btnAdicionar.textContent = "+ Adicionar Aluno";
    btnAdicionar.onclick = () => abrirModalAdicionar(turma);
    container.appendChild(btnAdicionar);

    turmas[turma].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    turmas[turma].forEach(aluno => {
        container.appendChild(criarItemAluno(aluno, turma));
    });
}

function excluirAluno(turma, index) {
    const aluno = turmas[turma][index];
    if (!confirm(`Deseja excluir o aluno "${aluno.nomeCompleto}"?`)) return;

    turmas[turma].splice(index, 1);
    carregarTurma(turma);
}

function abrirModalAdicionar(turma) {
    modalTurma = turma;
    modalIndex = null;

    document.getElementById("modal_titulo").textContent = "Adicionar Aluno — Turma " + turma;

    const campos = ["nome","nomeCompleto","cpf","matricula","email","media","destaque",
                    "matematica","portugues","historia","geografia","fisica",
                    "biologia","filosofia","sociologia","ingles","redacao"];
    campos.forEach(c => { document.getElementById("m_" + c).value = ""; });

    document.getElementById("m_genero").value = "Masculino";

    modalFotoDataUrl = null;
    document.getElementById("m_foto").value = "";
    document.getElementById("m_foto_preview").src = FOTO_MASCULINO;

    document.getElementById("modal_aluno").classList.add("ativo");
}

function abrirModalEditar(turma, index) {
    modalTurma = turma;
    modalIndex = index;

    const aluno = turmas[turma][index];
    document.getElementById("modal_titulo").textContent = "Editar Aluno — " + aluno.nomeCompleto;

    document.getElementById("m_nome").value = aluno.nome;
    document.getElementById("m_nomeCompleto").value = aluno.nomeCompleto;
    document.getElementById("m_cpf").value = aluno.cpf;
    document.getElementById("m_matricula").value = aluno.matricula;
    document.getElementById("m_email").value = aluno.email;
    document.getElementById("m_media").value = aluno.media;
    document.getElementById("m_destaque").value = aluno.destaque;
    document.getElementById("m_genero").value = aluno.genero || inferirGenero(aluno.nome);

    document.getElementById("m_matematica").value = aluno.notas.matematica;
    document.getElementById("m_portugues").value = aluno.notas.portugues;
    document.getElementById("m_historia").value = aluno.notas.historia;
    document.getElementById("m_geografia").value = aluno.notas.geografia;
    document.getElementById("m_fisica").value = aluno.notas.fisica;
    document.getElementById("m_biologia").value = aluno.notas.biologia;
    document.getElementById("m_filosofia").value = aluno.notas.filosofia;
    document.getElementById("m_sociologia").value = aluno.notas.sociologia;
    document.getElementById("m_ingles").value = aluno.notas.ingles;
    document.getElementById("m_redacao").value = aluno.notas.redacao;
    atualizarMediaModal();

    modalFotoDataUrl = null;
    document.getElementById("m_foto").value = "";
    document.getElementById("m_foto_preview").src = aluno.foto || "imagens/foto_de_homem_generica.png";

    document.getElementById("modal_aluno").classList.add("ativo");
}

function fecharModal() {
    document.getElementById("modal_aluno").classList.remove("ativo");
    modalTurma = null;
    modalIndex = null;
}

const CAMPOS_NOTAS = ["matematica","portugues","historia","geografia","fisica",
                      "biologia","filosofia","sociologia","ingles","redacao"];

function atualizarMediaModal() {
    let soma = 0;
    CAMPOS_NOTAS.forEach(c => {
        const val = parseFloat(document.getElementById("m_" + c).value);
        soma += isNaN(val) ? 0 : val;
    });
    document.getElementById("m_media").value = (soma / CAMPOS_NOTAS.length).toFixed(1);
}

function salvarAluno() {
    const nome = document.getElementById("m_nome").value.trim();
    const nomeCompleto = document.getElementById("m_nomeCompleto").value.trim();

    if (!nome || !nomeCompleto) {
        alert("Os campos Nome e Nome Completo são obrigatórios.");
        return;
    }

    const genero = document.getElementById("m_genero").value;
    const fotoPadrao = genero === "Feminino" ? FOTO_FEMININO : FOTO_MASCULINO;
    const fotoAtual = modalFotoDataUrl
        || (modalIndex !== null ? turmas[modalTurma][modalIndex].foto : fotoPadrao);

    const notas = {
        matematica: document.getElementById("m_matematica").value.trim(),
        portugues:  document.getElementById("m_portugues").value.trim(),
        historia:   document.getElementById("m_historia").value.trim(),
        geografia:  document.getElementById("m_geografia").value.trim(),
        fisica:     document.getElementById("m_fisica").value.trim(),
        biologia:   document.getElementById("m_biologia").value.trim(),
        filosofia:  document.getElementById("m_filosofia").value.trim(),
        sociologia: document.getElementById("m_sociologia").value.trim(),
        ingles:     document.getElementById("m_ingles").value.trim(),
        redacao:    document.getElementById("m_redacao").value.trim()
    };

    let soma = 0;
    CAMPOS_NOTAS.forEach(c => { soma += parseFloat(notas[c]) || 0; });
    const mediaCalculada = (soma / CAMPOS_NOTAS.length).toFixed(1);

    const aluno = {
        nome,
        nomeCompleto,
        cpf:       document.getElementById("m_cpf").value.trim(),
        matricula: document.getElementById("m_matricula").value.trim(),
        email:     document.getElementById("m_email").value.trim(),
        media:     mediaCalculada,
        destaque:  document.getElementById("m_destaque").value.trim(),
        genero,
        foto:      fotoAtual,
        notas
    };

    const turma = modalTurma;
    const idx = modalIndex;

    let indexToShow;
    if (idx === null) {
        turmas[turma].push(aluno);
        indexToShow = turmas[turma].length - 1;
    } else {
        turmas[turma][idx] = aluno;
        indexToShow = idx;
    }

    fecharModal();
    if (document.getElementById("nomes_alunos")) {
        carregarTurma(turma);
    } else {
        mostrarAluno(turmas[turma][indexToShow]);
    }
}

document.getElementById("modal_aluno")?.addEventListener("click", function(e) {
    if (e.target === this) fecharModal();
});

function pesquisarAlunos(e) {
    e.preventDefault();

    const termNome  = document.getElementById("nome_aluno").value.trim().toLowerCase();
    const termCpf   = document.getElementById("cpf_input").value.trim();
    const termEmail = document.getElementById("email_input").value.trim().toLowerCase();

    if (!termNome && !termCpf && !termEmail) {
        alert("Digite pelo menos um critério de pesquisa.");
        return;
    }

    const resultados = [];

    for (const turma in turmas) {
        turmas[turma].forEach((aluno, index) => {
            const matchNome  = !termNome  || aluno.nomeCompleto.toLowerCase().includes(termNome)
                                          || aluno.nome.toLowerCase().includes(termNome);
            const matchCpf   = !termCpf   || aluno.cpf.includes(termCpf);
            const matchEmail = !termEmail || aluno.email.toLowerCase().includes(termEmail);

            if (matchNome && matchCpf && matchEmail) {
                resultados.push({ turma, index, aluno });
            }
        });
    }

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    document.getElementById("conteudo-inicial").style.display = "none";
    document.getElementById("nomes_alunos").style.display = "flex";

    const container = document.getElementById("nomes_alunos");
    container.innerHTML = "";

    if (resultados.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "Nenhum aluno encontrado.";
        msg.style.cssText = "padding: 16px 20px; color: var(--cor-principal); font-size: 16px;";
        container.appendChild(msg);
        return;
    }

    resultados.forEach(({ turma, aluno }) => {
        const item = criarItemAluno(aluno, turma);
        item.querySelector(".aluno_nome_completo").textContent = aluno.nomeCompleto + " — Turma " + turma;
        container.appendChild(item);
    });
}

document.querySelector("#form_pesquisa form")?.addEventListener("submit", pesquisarAlunos);

document.getElementById("m_nome")?.addEventListener("input", function() {
    const generoDetectado = inferirGenero(this.value);
    document.getElementById("m_genero").value = generoDetectado;
    if (!modalFotoDataUrl) {
        document.getElementById("m_foto_preview").src = generoDetectado === "Feminino" ? FOTO_FEMININO : FOTO_MASCULINO;
    }
});

document.getElementById("m_genero")?.addEventListener("change", function() {
    if (!modalFotoDataUrl) {
        document.getElementById("m_foto_preview").src = this.value === "Feminino" ? FOTO_FEMININO : FOTO_MASCULINO;
    }
});

function mostrarAluno(aluno) {
    document.getElementById("nomeCompleto").textContent = aluno.nomeCompleto;
    document.getElementById("cpf").textContent = aluno.cpf;
    document.getElementById("matricula").textContent = aluno.matricula;
    document.getElementById("email").textContent = aluno.email;
    document.getElementById("genero").textContent = aluno.genero || inferirGenero(aluno.nome);
    document.getElementById("media").textContent = aluno.media;
    document.getElementById("destaque").textContent = aluno.destaque;

    document.getElementById("fotoAluno").src = aluno.foto;

    document.getElementById("matematica").textContent = aluno.notas.matematica;
    document.getElementById("portugues").textContent = aluno.notas.portugues;
    document.getElementById("historia").textContent = aluno.notas.historia;
    document.getElementById("geografia").textContent = aluno.notas.geografia;
    document.getElementById("fisica").textContent = aluno.notas.fisica;
    document.getElementById("biologia").textContent = aluno.notas.biologia;
    document.getElementById("filosofia").textContent = aluno.notas.filosofia;
    document.getElementById("sociologia").textContent = aluno.notas.sociologia;
    document.getElementById("ingles").textContent = aluno.notas.ingles;
    document.getElementById("redacao").textContent = aluno.notas.redacao;
}