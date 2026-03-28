// Informações dos alunos
const turmas = {
    "1A": [
        {
            nome: "Carlos",
            nomeCompleto: "Carlos Eduardo da Silva",
            cpf: "123.456.789-10",
            matricula: "16475298",
            email: "carlinhos@gmail.com",
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
            email: "ana@gmail.com",
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
        }
    ]
};

function carregarTurma(turma) {
    document.getElementById("conteudo-inicial").style.display = "none";

    // ✅ Mostra as seções que ficam escondidas
    document.getElementById("nomes_alunos").style.display = "flex"; 
    document.getElementById("informacoes_alunos").style.display = "flex";
    document.getElementById("notas_alunos").style.display = "flex";

    const container = document.getElementById("nomes_alunos");
    container.innerHTML = "";

    if (!turmas[turma]) {
        container.innerHTML = "<p>Turma não encontrada</p>";
        return;
    }

    turmas[turma].forEach((aluno, index) => {
        const btn = document.createElement("button");
        btn.textContent = aluno.nome;
        btn.onclick = () => mostrarAluno(aluno);
        container.appendChild(btn);

        if (index === 0) mostrarAluno(aluno);
    });
}

function mostrarAluno(aluno) {
    // Informações básicas
    document.getElementById("nomeCompleto").textContent = aluno.nomeCompleto;
    document.getElementById("cpf").textContent = aluno.cpf;
    document.getElementById("matricula").textContent = aluno.matricula;
    document.getElementById("email").textContent = aluno.email;
    document.getElementById("media").textContent = aluno.media;
    document.getElementById("destaque").textContent = aluno.destaque;

    // Foto
    document.getElementById("fotoAluno").src = aluno.foto;

    // Notas
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