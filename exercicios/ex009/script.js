let array = [contador = 0, res = document.querySelector('#result')]


function contar() {
    array[0] ++
    array[1].innerHTML = `<p>O contador está com <mark>${array[0]}</mark> cliques.</p>` 
}

function zerar() {
    array[0] = 0
    array[1].innerHTML = `O contador está com <mark>0</mark> cliques.`
}