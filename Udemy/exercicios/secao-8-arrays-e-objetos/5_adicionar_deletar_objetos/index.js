//Adicionando e deletando objetos 

let pessoa = {
    nome: "Raphael",
    idade: 23,
    profissao: "Desenvolvedor",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa);

pessoa.nome = "Debora";

console.log(pessoa);