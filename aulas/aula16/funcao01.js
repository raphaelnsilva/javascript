function parimpar(n) { // O "n" dentro da chamada, vai receber o valor do parametro que está lá em baixo 
    if (n%2 == 0) { // se o numero resultar em "0"
        return 'Par!' // vai retonar "par!"
    } else { // se não (else) 
        return 'Ímpar!' // vai retonar "impar!"
    }
}


console.log(parimpar(4)) //o valor 4 é o PARAMETRO
