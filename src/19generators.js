/*
function* generate() {
    console.log("Start");
    yield 1; /!* производит информацию и приостанавливает выполненеие *!/
    yield 2;
    yield 3;
    console.log("Finish");
}

var iterator = generate();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

var iterator = range(2, 6);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


/*
function generate() {
    let current = 1;
    console.log("Start");

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = { value: undefined, done: true }
                    if(current <= 3) {
                        result.value = current;
                        result.done = false;
                        current++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                        console.log("Finish");
                    }

                    return result;
                }
            }
        }
    }
}

let iterator = generate()[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/
