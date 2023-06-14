function fatorial(n) {
    let fat = 1
    for(let contador = n; contador > 1; contador--) {
        fat *= contador
    }
    return fat // para o valor aqui de baixo ir lá pra cima, temos que usar o "return"
}
console.log(fatorial(5))