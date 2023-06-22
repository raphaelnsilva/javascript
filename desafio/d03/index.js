let run = document.querySelector("#button") 

function mensagem() {
     
    let n = Number(window.prompt("digite um numero inteiro:"))

    if (n) { 
    window.alert(`antes de ${n} temos o numero ${n - 1} \n depois do ${n} temos o numero ${n + 1}`)
    } else {
        window.alert('[erro] você não digitou um número!')
    }
    
}

run.addEventListener("click", () => {
    mensagem()
})