let botao = document.querySelector("#button") 

function mensagem() {
    let product = window.prompt("Que produto você está comprando ")

    let value = Number(window.prompt(`Quanto custa o ${product} que você está comprando?`))
    if(value) {

        let payValue = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${product}`))

        if (payValue >= value) {
            let res = payValue - value 
            window.alert(`Você comprou ${product} que custou R$${value}.\nDeu R$${payValue} em dinheiro e vai receber R$${res} de troco.\nVolte sempre!`)
        } else if (payValue < value) {
            window.alert("O valor digitado não paga o produto")
        } else {
            window.alert("[erro] voce não digitou um valor numérico")
        }

    } else {
        window.alert("[erro] voce não digitou um valor numérico")
    }
    
}

botao.addEventListener('click', () => {
    mensagem()
})