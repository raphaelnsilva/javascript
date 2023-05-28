var res = document.querySelector('#result')
var computador = 0
var jogador = 0 

function sortear() { 
    var min = 1 
    var max = 100
    var dif = max - min 
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function rodar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você digitou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você digitou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}