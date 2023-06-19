document.addEventListener("click", (e) => {
    clique = e.target


    if (clique.classList.contains("botao1")) {
        let res = document.querySelector('.res')
        
        res.innerHTML = `Você apertou o botão 1`
    }

    if (clique.classList.contains("botao2")) {
        let res = document.querySelector('.res')
        
        res.innerHTML = `Você apertou o botão 2`
    }

    if (clique.classList.contains("botao3")) {
        let res = document.querySelector('.res')
        
        res.innerHTML = `Você apertou o botão 3`
    }
})