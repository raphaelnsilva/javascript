let dados = document.querySelector("#click")

//function 
function welcome() {
    let name = window.prompt("Digite seu nome")
    let age = window.prompt(`Olá ${name}! Quantos anos você tem?`)
    window.alert(`Acabei de conhecer ${name}, que tem ${age} anos de idade!`)
} 
//evento
dados.addEventListener("click", () => {
    console.log('Clicou')
    welcome()
})