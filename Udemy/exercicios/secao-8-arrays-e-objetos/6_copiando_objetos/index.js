// Metodo: Object.assign()
// Com esse método podemos copiar todas as propriedades de um objeto para outro

let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '1.0',
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);0