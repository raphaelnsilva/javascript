var contador = 0
var res = document.querySelector('#result')

function contar() {
    contador ++
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>` 
}

function zerar() {
    contador = 0
    res.innerHTML = `O contador está com <mark>0</mark> cliques.`
}