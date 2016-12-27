/*
let generator = function*() {

};

let obj = {
    *generator() {

    }
};

class SomeClass {
    *generator() {}
};
*/


function* generator() {
    let result = 1 + (yield);
    console.log(`result is ${result}`);
}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.next(2));