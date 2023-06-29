function decremento(num) {
   for ( let n = num; n >= 0; n--) {
      if (n % 2 == 0) {
         console.log(`${n} é par!`)
      } else {
         console.log(`${n}`)
      }
   }
}

console.log(decremento(10))