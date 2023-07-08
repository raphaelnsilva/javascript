let pessoa = {
    nome: 'Raphael',
    idade: 23,
    profissao: 'Programador',
}

let cadastro = {
    pessoa1: {
        nome: 'Raphael',
        idade: 23,
        profissao: "Programador",
        cidade: "São Paulo",
    },

    pessoa2: {
        nome: "Debora",
        idade: 23,
    }
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true

console.log(pessoa.casado)

console.log(cadastro.pessoa1.nome)

cadastro.pessoa1.endereco = "rua k"

console.log(cadastro.pessoa1)