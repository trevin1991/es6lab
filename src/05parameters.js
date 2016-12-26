function greet(greeting = "Hello", name = "friend") {
    console.log(`${greeting} ${name}`);
}

greet("Hi", "Maria");
greet("Hi");
greet(undefined, "Eugene");
greet();

function sum() {
    console.log(arguments);
    var sum = 0;
    Array.prototype.forEach.call(arguments, function(value) {
        sum += value;
    });
    console.log(sum);
}

function sum(...values) {
    let sum = 0;
    values.forEach((value) => {
        sum += value;
    });
    console.log(sum);
}

sum(2, 3, 5, 7, 9);