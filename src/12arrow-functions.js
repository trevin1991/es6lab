/* Стрелочные функции */

/*
function add(x, y) {
    return x + y;
}
*/

let add = (x, y) => x + y;

/*
function square(x) {
    return x * x;
}
*/

let square = (x) => x * x;


let factorial = (x) => {
    var result = 1;
    for(let i = 2; i <= x; i++)
        result *= i;
    return result;
}

/*
function giveMeAnswer() {
    return 42;
}
*/

let giveMeAnswer = () => 42;

/*
function log() {
    console.log("Logging...");
}
*/

let log = () => console.log("Logging...");

/*
let multiply = function(x, y) {
    let result = x*y;
    return result;
}
*/

let multiply = (x, y) => {
    let result = x * y;
    return result;
}


/*
let getPerson = function() {
    return { name: "John" }
};
*/

let getPerson = () => ({ name: "John" });


/* IIFE */
/*
(function() {
    console.log("IIFE");
}());
*/

(() => console.log("IIFE"))();

console.log(`Add function: ${add(2, 5)}`);
console.log(`Multiply function: ${multiply(3, 7)}`);
console.log(`Factorial function: ${factorial(5)}`);
console.log(`Square function: ${square(3)}`);
console.log(`giveMeAnswer function: ${giveMeAnswer()}`);
console.log(`getPerson function: ${JSON.stringify(getPerson())}`);
log();


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach((num) => (sum += num));
let squared = numbers.map(n => n * n);
console.log(sum);
console.log(squared);

let person = {
    name: "Bob",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
        console.log(this);
    }
};

person.greet();


