function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#F2A201'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#578481'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#042b5b'
    }
}