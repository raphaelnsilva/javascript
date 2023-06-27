function soma(a,b) {
    if (a === undefined || b === undefined) {
        console.log("this function need to have two arguments");
    } else {
        return a + b;
    } 
}

console.log(soma(1));

console.log(soma(1,2));

function welcome(name,age) {
    if (age === undefined) {
        console.log(`welcome ${name}!`)
    } else {
        console.log(`welcome ${name}, you have ${age} years old!`)
    }
}

welcome("Raphael");

welcome("Raphael", 23);
