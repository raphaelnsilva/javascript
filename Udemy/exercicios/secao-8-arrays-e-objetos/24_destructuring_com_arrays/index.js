let pessoa = {
    "nome": "Raphael",
    "idade": 23,
    "profissao": "Desenvolvedor",
    "hobbies": ["videogame", "basketball", "leitura"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0])