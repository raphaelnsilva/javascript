let numero = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = [] // vetor , array

function inNumero(n) { // o valor de n esta determinado da function adicionar
    if (Number(n) >= 1 && Number(n) <= 100) { // (n) = (numero.value) o valor de n é o numero digitado
        return true // caso a afirmação acima for verdadeira ele vai retornar "true"
    } else {
        return false // caso contrario, retornará "false"
    }
}

function inLista(n, valores) { // essa parte do codigo retornara o indice chave do vetor "valores"
    if (valores.indexOf(Number(n)) != -1) { // se o Numero digitado não for igual a -1, irá retornar true
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (inNumero(numero.value) && !inLista(numero.value, valores)) { 
        valores.push(Number(numero.value)) // vai empurrar o valor digitado para o vetor "valores"
        let item = document.createElement('option') //createElement vai criar a tag "option" no html
        item.text = `Valor ${numero.value} adicionado.` // digita o texto correspondente a variavel "item"
        lista.appendChild(item) // faz com que o valor de "item" sejá mostrado na variavel "lista"
        res.innerHTML = '' // vai limpar o resultado quando nos adicionarmos outro numero na caixa 
    } else { // senão
        window.alert("Valor inválido ou já escontrado na lista.") //caixa de alerta
    }
    numero.value = '' // essa linha faz que depois que o valor seja digitado, apague oque esta nela
    numero.focus() // essa linha faz com que o foco vá para a caixa de texto
} 

function finalizar() {
    if (valores.length == 0) { // se o array estiver vazio ele irá alertar 
        window.alert('Adicione valores antes de finalizar!') // caixa de alerta
    } else { // senão
        let total = valores.length // length retorna a quantidade de Strings ou o tamanho de um Array
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) { // para a variavel "posicao" dentro do array "valores"
            soma += valores[posicao]
            if (valores[posicao] > maior)
                maior = valores[posicao]
            if (valores[posicao] < menor)
                menor = valores[posicao]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos val9ores digitados é ${media}</p>`
    }   
}