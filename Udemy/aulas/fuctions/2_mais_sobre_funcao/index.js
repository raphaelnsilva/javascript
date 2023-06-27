function multiplicarTresNumeros(x,y,z) {
    return x * y * z; //vai retornar a soma conforme o parâmetro
}

console.log(multiplicarTresNumeros(2,3,4)) //chamei a função e coloquei um parâmetro nela

const mult = multiplicarTresNumeros(5,4,8) //chamei a função e a atribui ela a uma variavel 

console.log("o valor de mult é " + mult)

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("pode dirigir!");
    } else {
        console.log("não pode dirigir!");
    }
}

console.log(podeDirigir(18,true))
console.log(podeDirigir(17,true))
console.log(podeDirigir(19,0))
console.log(podeDirigir(19,1))