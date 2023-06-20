const nameForm = document.querySelector('#name-form')
const welcomeContainer = document.querySelector('#welcome')
const logoutBtn = document.querySelector('#logout')

// Function 
function checkUser() {
    const userName = localStorage.getItem("name") //vai pegar a chave "name" na localStorage 

    if(userName) { // se tiver dados na varival ele vai fazer o que está em baixo

        nameForm.style.display = "none" // vai esconder o formulario
        welcomeContainer.style.display = "block" // e vai mostrar a mensagem de welcome 

        const userNameElement = document.querySelector("#username") //vai pegar o "span" do html e colocar dentro da variavel 
        userNameElement.textContent = userName //vai mostrar o dado que está dentro da variavel fazendo que o span seja preenchido 
    } else {
        nameForm.style.display = "block" // se a variavel "userName" não tiver dado
        welcomeContainer.style.display = "none" // ele vai esconder o welcome e mostrar o formulario 
    }
}

// Events 
nameForm.addEventListener("submit", (e) => { // (e) reprensenta o evento em si 
    e.preventDefault()

    const nameInut = document.querySelector('#name') // a variavel vai receber o que o usuario digitar no input

    localStorage.setItem("name", nameInput.value) // vai salvar o valor da variavel na localStorage coom o nome de "name"
    
    nameInput.value = "" // vai limpar o texto quando ele for enviado 

    checkUser() // vai executar a função quando o usuario digitar o nome
})

logoutBtn.addEventListener("click", () => { //função anonima

    localStorage.removeItem("name")// vai remover o key e o valor  

    checkUser() // vai chegar o usuario 
})

checkUser() //exercuta a funcção no começo da aplicação 