let staticLanguages = ["C", "C++", "Java"];
let dynamicLanguages = ["JavaScript", "PHP", "Ruby"];

let testers = ["Burich", "Usachev", "Syrisko", "Golubev"];
let frontenders = ["Trofimovich", "Khrystanovich", "Donets"];

let numbers = [1, 2, 3];

let languages = [...staticLanguages, "C#", ...dynamicLanguages, "Python"];
let employees = [...testers, ...frontenders];

function sum(a, b, c) {
    console.log(a + b + c);

    return a + b + c;
}

console.log(languages);
console.log(employees);
sum(...numbers);

