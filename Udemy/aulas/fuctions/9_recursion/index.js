function recursao(n) {

    if (n - 1 < 2) {
        console.log('Recursion stop');
    } else if (n % 2 != 0) {
        console.log('Numero impar ' + n);
        recursao(n - 1);
    } else {
        console.log('Numero par ' + n);
        recursao(n - 2);
    }
}
 
recursao(10);

