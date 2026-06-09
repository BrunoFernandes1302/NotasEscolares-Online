(function () {
  if (localStorage.getItem('ne_v1')) return;

  const usuarios = [
    { id: '1', login: 'admin', senha: '123', nome: 'Administrador do Sistema', email: 'admin@escola.com', admin: true, favoritos: [] },
    { id: '2', login: 'professor', senha: '123', nome: 'Prof. João Silva', email: 'joao@escola.com', admin: false, favoritos: [] }
  ];

  const turmas = [
    { id: '1A', nome: '1º Ano A', descricao: 'Turma matutina com foco em ciências exatas. Alunos dedicados com excelente desempenho em Matemática e Física.', turno: 'Manhã', ano: 1, secao: 'A', destaque: true },
    { id: '1B', nome: '1º Ano B', descricao: 'Turma vespertina com destaque em humanidades e redação. Índice de aprovação acima da média.', turno: 'Tarde', ano: 1, secao: 'B', destaque: true },
    { id: '1C', nome: '1º Ano C', descricao: 'Turma noturna com aluno destaque em todas as disciplinas. Ambiente colaborativo e engajado.', turno: 'Noite', ano: 1, secao: 'C', destaque: false },
    { id: '2A', nome: '2º Ano A', descricao: 'Turma matutina com forte desempenho em ciências da natureza e Matemática avançada.', turno: 'Manhã', ano: 2, secao: 'A', destaque: false },
    { id: '2B', nome: '2º Ano B', descricao: 'Turma vespertina equilibrada com destaque em Biologia e preparo intensivo para o ENEM.', turno: 'Tarde', ano: 2, secao: 'B', destaque: true },
    { id: '2C', nome: '2º Ano C', descricao: 'Turma noturna com especialização em humanidades e línguas estrangeiras.', turno: 'Noite', ano: 2, secao: 'C', destaque: false },
    { id: '3A', nome: '3º Ano A', descricao: 'Vestibulandos com foco em exatas e redação ENEM. Alto índice de aprovação em universidades federais.', turno: 'Manhã', ano: 3, secao: 'A', destaque: true },
    { id: '3B', nome: '3º Ano B', descricao: 'Turma de alto rendimento preparada para os principais vestibulares do país.', turno: 'Tarde', ano: 3, secao: 'B', destaque: false }
  ];

  const alunos = {
    '1A': [
      { nome: 'Carlos', nomeCompleto: 'Carlos Eduardo da Silva', cpf: '123.456.789-10', matricula: '16475298', email: 'carlos1a@gmail.com', media: '6.9', destaque: 'Matemática', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '9.5', portugues: '6', historia: '5', geografia: '7.5', fisica: '8.3', biologia: '6.8', filosofia: '4', sociologia: '6.1', ingles: '7.2', redacao: '9' } },
      { nome: 'Ana', nomeCompleto: 'Ana Souza', cpf: '987.654.321-00', matricula: '123456', email: 'ana1a@gmail.com', media: '8.5', destaque: 'Português', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '8', portugues: '9', historia: '7', geografia: '8', fisica: '7', biologia: '8', filosofia: '9', sociologia: '8', ingles: '9', redacao: '10' } },
      { nome: 'Lucas', nomeCompleto: 'Lucas Pereira Lima', cpf: '321.654.987-11', matricula: '111222', email: 'lucas1a@gmail.com', media: '7.2', destaque: 'Física', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '7', portugues: '6', historia: '7', geografia: '7', fisica: '9', biologia: '8', filosofia: '6', sociologia: '7', ingles: '8', redacao: '7' } }
    ],
    '1B': [
      { nome: 'Mariana', nomeCompleto: 'Mariana Alves Rocha', cpf: '222.333.444-55', matricula: '222111', email: 'mariana1b@gmail.com', media: '9.1', destaque: 'Redação', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '8', portugues: '10', historia: '9', geografia: '9', fisica: '8', biologia: '9', filosofia: '9', sociologia: '10', ingles: '9', redacao: '10' } },
      { nome: 'Pedro', nomeCompleto: 'Pedro Henrique Costa', cpf: '555.666.777-88', matricula: '333444', email: 'pedro1b@gmail.com', media: '6.5', destaque: 'Geografia', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '5', portugues: '6', historia: '7', geografia: '9', fisica: '6', biologia: '7', filosofia: '6', sociologia: '5', ingles: '7', redacao: '6' } },
      { nome: 'Juliana', nomeCompleto: 'Juliana Martins', cpf: '999.888.777-66', matricula: '555666', email: 'juliana1b@gmail.com', media: '7.8', destaque: 'Biologia', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '7', portugues: '8', historia: '7', geografia: '8', fisica: '6', biologia: '10', filosofia: '8', sociologia: '7', ingles: '8', redacao: '9' } }
    ],
    '1C': [
      { nome: 'Rafael', nomeCompleto: 'Rafael Gomes', cpf: '111.222.333-44', matricula: '777888', email: 'rafael1c@gmail.com', media: '7.0', destaque: 'História', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '6', portugues: '7', historia: '9', geografia: '8', fisica: '6', biologia: '7', filosofia: '8', sociologia: '7', ingles: '6', redacao: '7' } },
      { nome: 'Fernanda', nomeCompleto: 'Fernanda Ribeiro', cpf: '444.555.666-77', matricula: '888999', email: 'fernanda1c@gmail.com', media: '8.3', destaque: 'Inglês', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '7', portugues: '8', historia: '8', geografia: '7', fisica: '7', biologia: '8', filosofia: '8', sociologia: '8', ingles: '10', redacao: '9' } },
      { nome: 'Bruno', nomeCompleto: 'Bruno Oliveira', cpf: '777.666.555-44', matricula: '999000', email: 'bruno1c@gmail.com', media: '10', destaque: 'Todas', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '10', portugues: '10', historia: '10', geografia: '10', fisica: '10', biologia: '10', filosofia: '10', sociologia: '10', ingles: '10', redacao: '10' } }
    ],
    '2A': [
      { nome: 'Gabriel', nomeCompleto: 'Gabriel Santos', cpf: '123.123.123-12', matricula: '101010', email: 'gabriel2a@gmail.com', media: '7.5', destaque: 'Matemática', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '9', portugues: '7', historia: '6', geografia: '7', fisica: '8', biologia: '7', filosofia: '6', sociologia: '7', ingles: '8', redacao: '7' } },
      { nome: 'Larissa', nomeCompleto: 'Larissa Teixeira', cpf: '321.321.321-32', matricula: '202020', email: 'larissa2a@gmail.com', media: '8.0', destaque: 'Português', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '7', portugues: '9', historia: '8', geografia: '8', fisica: '7', biologia: '8', filosofia: '8', sociologia: '8', ingles: '9', redacao: '9' } },
      { nome: 'Felipe', nomeCompleto: 'Felipe Andrade', cpf: '456.456.456-45', matricula: '303030', email: 'felipe2a@gmail.com', media: '6.7', destaque: 'Física', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '7', portugues: '6', historia: '6', geografia: '6', fisica: '9', biologia: '7', filosofia: '6', sociologia: '6', ingles: '7', redacao: '7' } }
    ],
    '2B': [
      { nome: 'Camila', nomeCompleto: 'Camila Duarte', cpf: '789.789.789-78', matricula: '404040', email: 'camila2b@gmail.com', media: '8.9', destaque: 'Redação', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '8', portugues: '9', historia: '9', geografia: '9', fisica: '8', biologia: '9', filosofia: '9', sociologia: '9', ingles: '9', redacao: '10' } },
      { nome: 'Diego', nomeCompleto: 'Diego Lopes', cpf: '654.654.654-65', matricula: '505050', email: 'diego2b@gmail.com', media: '6.4', destaque: 'Geografia', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '5', portugues: '6', historia: '7', geografia: '9', fisica: '6', biologia: '6', filosofia: '6', sociologia: '5', ingles: '6', redacao: '6' } },
      { nome: 'Patricia', nomeCompleto: 'Patricia Nunes', cpf: '987.987.987-98', matricula: '606060', email: 'patricia2b@gmail.com', media: '7.7', destaque: 'Biologia', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '7', portugues: '8', historia: '7', geografia: '8', fisica: '7', biologia: '10', filosofia: '8', sociologia: '7', ingles: '8', redacao: '8' } }
    ],
    '2C': [
      { nome: 'Henrique', nomeCompleto: 'Henrique Barros', cpf: '111.444.777-00', matricula: '707070', email: 'henrique2c@gmail.com', media: '7.1', destaque: 'História', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '6', portugues: '7', historia: '9', geografia: '8', fisica: '6', biologia: '7', filosofia: '7', sociologia: '7', ingles: '6', redacao: '7' } },
      { nome: 'Beatriz', nomeCompleto: 'Beatriz Castro', cpf: '222.555.888-11', matricula: '808080', email: 'beatriz2c@gmail.com', media: '8.4', destaque: 'Inglês', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '7', portugues: '8', historia: '8', geografia: '7', fisica: '7', biologia: '8', filosofia: '8', sociologia: '8', ingles: '10', redacao: '9' } },
      { nome: 'João', nomeCompleto: 'João Pedro Melo', cpf: '333.666.999-22', matricula: '909090', email: 'joao2c@gmail.com', media: '6.9', destaque: 'Sociologia', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '6', portugues: '7', historia: '6', geografia: '7', fisica: '6', biologia: '7', filosofia: '7', sociologia: '9', ingles: '6', redacao: '7' } },
      { nome: 'João Aguiar', nomeCompleto: 'João Pedro Aguiar', cpf: '333.666.999-11', matricula: '909091', email: 'joaoaguiar2c@gmail.com', media: '6.9', destaque: 'Sociologia', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '6', portugues: '7', historia: '6', geografia: '7', fisica: '6', biologia: '7', filosofia: '7', sociologia: '9', ingles: '6', redacao: '7' } }
    ],
    '3A': [
      { nome: 'Eduardo', nomeCompleto: 'Eduardo Farias', cpf: '444.777.000-33', matricula: '111111', email: 'eduardo3a@gmail.com', media: '7.9', destaque: 'Matemática', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '10', portugues: '7', historia: '7', geografia: '7', fisica: '9', biologia: '7', filosofia: '7', sociologia: '7', ingles: '8', redacao: '8' } },
      { nome: 'Sofia', nomeCompleto: 'Sofia Mendes', cpf: '555.888.111-44', matricula: '222222', email: 'sofia3a@gmail.com', media: '9.0', destaque: 'Português', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '8', portugues: '10', historia: '9', geografia: '9', fisica: '8', biologia: '9', filosofia: '9', sociologia: '9', ingles: '9', redacao: '10' } },
      { nome: 'André', nomeCompleto: 'André Silva', cpf: '666.999.222-55', matricula: '333333', email: 'andre3a@gmail.com', media: '6.8', destaque: 'Física', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '7', portugues: '6', historia: '6', geografia: '6', fisica: '9', biologia: '7', filosofia: '6', sociologia: '6', ingles: '7', redacao: '7' } }
    ],
    '3B': [
      { nome: 'Lucas', nomeCompleto: 'Lucas Vieira', cpf: '777.000.333-66', matricula: '444444', email: 'lucas3b@gmail.com', media: '7.3', destaque: 'Geografia', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '6', portugues: '7', historia: '7', geografia: '9', fisica: '6', biologia: '7', filosofia: '7', sociologia: '7', ingles: '7', redacao: '7' } },
      { nome: 'Aline', nomeCompleto: 'Aline Barbosa', cpf: '888.111.444-77', matricula: '555555', email: 'aline3b@gmail.com', media: '8.6', destaque: 'Biologia', genero: 'Feminino', foto: 'imagens/foto_mulher_generica.png', notas: { matematica: '8', portugues: '9', historia: '8', geografia: '8', fisica: '7', biologia: '10', filosofia: '9', sociologia: '8', ingles: '9', redacao: '9' } },
      { nome: 'Renato', nomeCompleto: 'Renato Alves', cpf: '999.222.555-88', matricula: '666666', email: 'renato3b@gmail.com', media: '6.6', destaque: 'Sociologia', genero: 'Masculino', foto: 'imagens/foto_de_homem_generica.png', notas: { matematica: '6', portugues: '6', historia: '6', geografia: '6', fisica: '6', biologia: '7', filosofia: '7', sociologia: '9', ingles: '6', redacao: '7' } }
    ]
  };

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem('turmas', JSON.stringify(turmas));
  localStorage.setItem('alunos', JSON.stringify(alunos));
  localStorage.setItem('ne_v1', '1');
})();
