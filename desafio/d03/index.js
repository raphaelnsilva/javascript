function mensagem() {
    let number = Number(window.prompt("Digite um número inteiro qualquer"))
    window.alert(`o antecessor de ${number} é ${number - 1} e o sucessor de ${number} é ${number + 1}`)
}

let initial = document.querySelector("#numero")

initial.addEventListener('click', () => {
    mensagem()
})