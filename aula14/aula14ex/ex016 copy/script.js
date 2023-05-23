function contar() {
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var result = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        window.alert ('[Erro] Faltam dados!')
    } else {
        result.innerHTML = 'contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        for (var c = i; c <= f; c += p)
        result.innerHTML += `${c} `
    }
}