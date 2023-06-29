function autoEscola(age) {
   if (age >= 18) {
      console.log(`Você tem ${age} anos, já é maior de idade, pode entrar na auto escola`);
   } else {
      console.log(`Você ainda é menor de idade.`);
   }
}

console.log(autoEscola(19));