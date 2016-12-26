function* generate() {
    console.log("Start");
    yield 1;
    yield 2;
    yield 3;
    console.log("Finish");
}

var iterator = generate();
console.log(iterator.next());
console.log(iterator.next());
//iterator.next();