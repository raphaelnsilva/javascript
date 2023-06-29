function string(texto) {
   
   if (texto.length > 10) {

      console.log('Você digitou mais de 10 caracteres!');

   } else {
      console.log(`Você digitou menos de 10 caracteres!`)
   }
}
console.log(string('aaaaaaaaaaa'))