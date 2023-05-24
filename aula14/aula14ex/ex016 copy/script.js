function contar() {
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var result = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        result.innerHTML = 'impossível contar!'
       //window.alert ('[Erro] Faltam dados!')
    } else {
        result.innerHTML = 'contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) { 
                result.innerHTML += `${c} \u{1F449}` // o codigo do emoji: U+1F605, o codigo formatado em JS: \u{1F605}
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                result.innerHTML += `${c} \u{1F449}`
            }
        }   
        result.innerHTML += `\u{1F3C1}`
    }   
}