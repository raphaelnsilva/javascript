let numero = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function inNumero(n) { // o valor de n esta determinado da function adicionar
    if (Number(n) >= 1 && Number(n) <= 100) { // (n) = (numero.value) o valor de n é o numero digitado
        return true // caso a afirmação acima for verdadeira ele vai retornar "true"
    } else {
        return false // caso contrario, retornará "false"
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (inNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option') //createElement cria a tag "option" no html
        item.text = `Valor ${numero.value} adicionado.` // digita o texto correspondente a variavel "item"
        lista.appendChild(item) // faz com que o valor de "item" sejá mostrado na variavel "lista"
        res.innerHTML = '' // vai limpar o resultado quando nos adicionarmos outro numero na caixa 
    } else {
        window.alert("Valor inválido ou já escontrado na lista.") //caixa de alerta
    }
    numero.value = '' // essa linha faz que depois que o valor seja digitado, apague oque esta nela
    numero.focus() // essa linha faz com que o foco vá para a caixa de texto
} 

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length // length retorna a quantidade de Strings ou o tamanho de um Array
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }    
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    }
}