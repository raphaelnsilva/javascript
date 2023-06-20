const login = document.querySelector('#login-tela')
const logado = document.querySelector('.logou')
const saiu = document.querySelector('.sair')
//FUNÇÃO
function loggin() {
    const logName = localStorage.getItem("nome")
    if(logName) {
        login.style.display = "none" // vai esconder a tela de login
        logado.style.display = "block" //vai mostrar a tela de logado
    } else {
        login.style.display = "block"
        logado.style.display = "none"
    }
}
//EVENTO
login.addEventListener("click", (e) => { //
    e.preventDefault()
    const nameInput = document.querySelector("#nome")
    localStorage.setItem("nome", nameInput.value)
    nameInput.value = ""
    loggin()
}) 
saiu.addEventListener('click', () =>{
    localStorage.removeItem("nome")
    loggin()
})
loggin()

