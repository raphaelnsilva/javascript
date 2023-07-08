// Objetos é uma coleção de propriedades, parecidos com arrays
// Também podemos acessar essas propriedades.
// podemos adicionar e deletar propriedades ao longo do nosso programa.

let cachorro = {
    patas: 4,
    nome: 'Spike',
    latir: function() {
        console.log("Au au");
    }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();