/*
/!* function declaration *!/
function Task() {}

/!* function expression *!/
let Task = function Task() {}

class Task {

}
*/

let Task = class Task {
    constructor() {
        console.log("Creation Task");
    }
}

let SubTask = class extends Task {
    constructor() {
        super();
        console.log("Creation SubTask");
    }
}

let task = new Task();
let subtask = new SubTask();

console.log(task);
console.log(subtask);