class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this.done = false;
        Task.count += 1;


        console.log("Task constructor");
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return "Default Task Title"
    }

    complete() {
        this.done = true;

        console.log(`Task "${this.title}" is done`);
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log("SubTask constructor");
    }

    complete() {
        super.complete();
        console.log(`SubTask "${this.title}" is done`);
    }
}

let task = new Task("Learn Javascript");
let subtask = new SubTask("Learn ES6", task);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

console.log(subtask instanceof Task);
console.log(subtask instanceof SubTask);