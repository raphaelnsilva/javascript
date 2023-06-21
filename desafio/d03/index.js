const resultado = document.querySelector('#result')

function mensagem(Number) {
    let res = document.createElement("p") 
}

let initial = document.querySelector("#numero")

initial.addEventListener('click', () => {
    let number = Number(window.prompt("Digite um número inteiro qualquer"))
    mensagem(Number)

})