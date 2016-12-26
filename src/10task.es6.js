class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this._done = false;
        Task.count += 1;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    complete() {
        this._done = true;
    }

    static getDefaultTitle() {
        return "Default Task Title";
    }
}

class User {
    constructor(login, taskList) {
        this._login = login;
        this._taskList = taskList;
    }
}

Task.count = 0;



class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this._parent = parent;
    }
}

let task = new Task("[es6] Learn Javascript");
let subtask = new SubTask("[es6] Learn ES6", task);

console.log(task);
console.log(subtask);