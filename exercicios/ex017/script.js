function gerar() {
    var min = 1
    var max = 100
    var dif = max - min
    var aleatorio = Math.random()
    var num = min + Math.trunc(dif * aleatorio)

    var res = document.querySelector('#result')
    res.innerHTML = `<p>Acabei de pensar no número ${num}</p>`
}