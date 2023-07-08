
// Palavra a ser adivinhada
const palavra = "javascript";

// Array para armazenar as letras adivinhadas
let letrasAdivinhadas = [];

// Função para atualizar a exibição da palavra com as letras corretas
function atualizarPalavra() {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  for (let i = 0; i < palavra.length; i++) {
    const span = document.createElement("span");
    span.classList.add("letter");

    if (letrasAdivinhadas.includes(palavra[i])) {
      span.textContent = palavra[i];
    } else {
      span.textContent = "_";
    }

    wordContainer.appendChild(span);
  }
}

// Função para verificar se a letra adivinhada está correta
function verificarLetra() {
  const input = document.getElementById("guess-input");
  const letra = input.value.toLowerCase();

  if (!letrasAdivinhadas.includes(letra)) {
    letrasAdivinhadas.push(letra);
    atualizarPalavra();
  }

  input.value = "";
  input.focus();
}

// Event listener para o botão de adivinhar
const guessButton = document.getElementById("guess-button");
guessButton.addEventListener("click", verificarLetra);

// Event listener para a tecla Enter no input
const guessInput = document.getElementById("guess-input");
guessInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    verificarLetra();
  }
});

// Inicializar a exibição da palavra
atualizarPalavra();