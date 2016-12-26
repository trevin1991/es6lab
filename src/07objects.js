let firstName = "Eugene",
    lastName = "Trofimovich",
    email = "eugene.trofimovich@gmail.com";

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

/*
Object.defineProperty(person, "fullName", {
    get: function() { return this.firstName + " " + this.lastName; },
    set: function(value) { this.fullName = value; }
});
*/

console.log(person);
person.sayHello();