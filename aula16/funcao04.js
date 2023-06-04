function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat // para o valor aqui de baixo ir lá pra cima, temos que usar o "return"
}
console.log(fatorial(5))