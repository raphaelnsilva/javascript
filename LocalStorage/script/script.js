// 1 - inserir dado 
localStorage.setItem("nome da chave", "matheus") // dentro do medoto colocamos o nome da chave e depois o valor
// aqui podemos inserir dados dentro do local storage se perde-los quando fechamos o navegador


// 2 - resgatar item 
const dado = localStorage.getItem("nome da chave") //para resgatar, colocamos o nome da chave dentro do parametro do metodo

console.log(dado) 

// 3 - resgatar item que não existe 
const lastName = localStorage.getItem("lastName") // ele nos permite resgatar dados que não existem

console.log(lastName) // porém o resultado será "null"

if (!lastName) { // se a variavel "lastName" não tiver dados 
    console.log('Sem sobrenome!') // ele vai mostrar essa mensagem na tela 
}

// 4 - remover item 
localStorage.removeItem("nome da chave") // para remover colocamos o nome da chave que queremos remover 

// 5 - limpar todos os itens 
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

// "typeof" indica o TIPO do operando
//console.log(typeof localStorage.getItem("a")) //independente se o dado for Number, no localStorage ele será considerado uma String

localStorage.clear() // limpa todos os itens que estão salvos na localStorage 

// SESSION STORAGE 

// 1 - salvar dados na sessionStorage
sessionStorage.setItem("nome da chave", 123) // se fechar a aba, perdemos os dados da sessionStorage

// 2 - resgatar dados da sessionStorage
const n = sessionStorage.getItem("nome da chave")

console.log(n)

// sessionStorage possui os mesmos metodos do localStorage

// SALVAR OBJETOS

const person = { // vai salvar todos os objetos abaixo nessa variavel 
    nome: "Raphael", // temos que usar a virgula para cada objeto 
    idade: 23, 
    job: "Programador", 
}

//localStorage.setItem("person", person) //dessa forma não conseguimos salvar os dados da maneira correta 

//dessa forma conseguimos salvar os objetos de maneira correta, ele vira um texto em formato de objeto
localStorage.setItem("nome da chave", JSON.stringify(person)) // aqui o objeto é convertido corretamente parauma String 

const getPerson = localStorage.getItem("nome da chave") // essa é a forma errada de solicitar o item

console.log(getPerson.nome) // aqui ele pede pra imprimir no console o objeto "nome"

const personObject = JSON.parse(getPerson) // dessa forma convertemos o os dados que estão dentro da variavel "getPerson" para objetos

console.log(typeof personObject) // vai mostrar o tipo de dado que está dentro da variavel "personObject"

console.log(personObject.job) // vao mostrar o que tem dentro do objeto "job"
 


