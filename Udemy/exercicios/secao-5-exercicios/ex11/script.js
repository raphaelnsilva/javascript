let idade = 18;
let cnh = true;

if (idade >= 18 && cnh == false) {
    console.log("Você tem 18 mas não tem CNH")
} else if (idade < 18 && cnh) {
    console.log("Você ainda é menor de idade")
} else {
    console.log("Você está apto a dirigir")
}