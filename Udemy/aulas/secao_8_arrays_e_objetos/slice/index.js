let num = [0,1,2,3,4,5,6,7,8,9];

// primeiro o indice que a gente quer, depois onde queremos parar
console.log(num.slice(4,5)); // 4

// vai pegar o numero que a gente quer, até o final do array, pois não definimos o final
console.log(num.slice(4)); // 4, 5, 6, 7, 8, 9

// retona os valores do final para o começo.
console.log(num.slice(-2));  // 8, 9.

// vai retornar do indice 3 até o indice 7, o 8 e 9 ficarão de fora.
console.log(num.slice(3,-2)); // 3, 4, 5, 6, 7.