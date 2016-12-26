/* Деструктивное присваивание объектов */

let person = {
    firstName: "Eugene",
    lastName: "Trofimovich"
};

let { firstName, lastName, age = 25 } = { firstName: "Eugene", lastName: "Trofimovich" };
console.log(firstName, lastName, age);

let user = {
    login: "trevin",
    age: 18,
    card: {
        no: 23546845986,
        lastUsed: "2016-01-01"
    },
    social: {
        facebook: "trevin",
        twitter: "eugenefromminsk"
    }
};

let = { login, age, card, social: { facebook, twitter }, card: { no, lastUsed } } = user;
console.log(login, age, facebook, twitter, no, lastUsed);


function post(url, { data, cache }) {
    console.log(url, data, cache);
}

let result = post("api/users", { data: user, cache: false });