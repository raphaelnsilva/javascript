let pessoa = {
    nome: 'Raphael',
}

let pessoa2 = pessoa;

console.log(pessoa2 == pessoa); //true 

pessoa2.nome = 'debora';

console.log(pessoa.nome) // se alterar em um, também vai alterar no outro 

pessoa.nome = 'ricarda';

console.log(pessoa2.nome)