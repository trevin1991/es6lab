/* Деструктивное присваивание массивов */

/*
    let js = languages[0];
    let php = languages[1];
    let py = languages[2];
    let rb = languages[3];
*/

let [js, php, py, rb] = ["JavaScript", "PHP", "Python", "Ruby"];

console.log(js, php, py, rb);

//let scores = [3, 4, [5, 6]];
//let [low, mid, [high, higher]] = scores;

//console.log(low, mid, high, higher);

function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 4]);

function getScores() {
    return [3, 4, 5];
}

let scores = getScores();
console.log(scores);
let [low, mid, high] = getScores();
console.log(low, mid, high);


let yes = "Yes";
let no = "No";

[yes, no] = [no, yes];
console.log(`Yes is ${yes}`);
console.log(`No is ${no}`);

function getDays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
}

let [sun, mon, tue, wed, thu, fri, sat] = getDays();
console.log(sun, mon, tue, wed, thu, fri, sat);
