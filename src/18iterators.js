let xmen = ["Cyclops", "Wolverine", "Rogue"];

console.info("for");
for(let i = 0; i < xmen.length; i++)
    console.log(xmen[i]);

console.info("for...in");
for(let key in xmen)
    console.log(xmen[key]);

console.info("forEach");
xmen.forEach(xman => console.log(xman));

console.info("for...of");
for(let xman of xmen) {
    console.log(xman);
}


console.info("iterator");
let iterator = xmen[Symbol.iterator](),
    next = iterator.next();
while(!next.done) {
    console.log(next.value);
    next = iterator.next();
}

let idGenerator = {
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    }
};

for(let id of idGenerator) {
    console.log(id);
}



class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = { value: undefined, done: true };

        if(this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }

        return result;
    }
}


class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let taskList = new TaskList();
taskList.addTasks("learn Javascript", "learn ES6", "Buy products");

for(let task of taskList) {
    console.log(task);
}