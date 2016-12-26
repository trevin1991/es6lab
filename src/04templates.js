function greet(name) {
    console.log(`Hello ${name}`);
}

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

function add(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
}


let name = "Eugene";
console.log(upperName `Hello ${name}`);

function upperName(literals, ...values) {
    return literals[0] + values[0].toUpperCase();
}

var email = ["trofimovich.eugene@gmail.com", "contact@techrocks.ru", "Hello!", "How are you doing?"];

createEmail(...email);
greet("Eugene");
add(5, 7);