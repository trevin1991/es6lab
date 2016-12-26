function Task(title) {
    this._title = title;
    this._done = false;
    Task.count += 1;
}

Object.defineProperty(Task, "title", {
    get: function() {
        return this._title;
    },
    set: function(value) {
        this._title = value;
    }
});

Task.prototype.complete = function() {
    this._done = true;
};

Task.getDefaultTitle = function() {
    return "Default Task Title";
};

Task.count = 0;


function SubTask(title, parent) {
    Task.call(this, title);
    this._parent = parent;
}

SubTask.prototype = Object.create(Task.prototype);
SubTask.prototype.constructor = SubTask;


var task = new Task("[es5] Learn Javascript");
var subtask = new SubTask("[es5] Learn ES6", task);

console.log(task);
console.log(subtask);