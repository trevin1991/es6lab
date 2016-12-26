class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
    }

    get done() {
        return (this._done) ? "completed" : "not completed";
    }

    set done(value) {
        if(typeof value === "boolean")
            this._done = value;
        else
            console.error("done property can be only 'true' or 'false'");
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" is done!`);
    }

    static getDefaultTitle() {
        return "Default Task Title"
    }
}

/* static property */
Task.count = 0;
let task = new Task("Clean the room");
console.log(task.done);
task.complete();
console.log(task.done);
