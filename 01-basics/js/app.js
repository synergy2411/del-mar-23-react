// let x = 100;

// console.log(typeof x);

// x = "Hello"

// console.log(typeof x);


// function demo(arr) {
//     if (arr.length > 2) {
//         let load = "LOADING..."
//         console.log(flash)
//     } else {
//         let flash = "FLASHING..."
//     }
// }


// demo([1, 2, 3, 4]);

// for (let i = 0; i < 5; i++) {
//     console.log(i)
//     setTimeout(function () {
//         console.log("1 second left - ", i)
//     }, 1000)
// }


// const MAX_SAL = 10000;

// MAX_SAL = 12000;         // ERROR

// const USER_OBJ = {
//     name: "Foo",
//     age: 32
// }

// USER_OBJ = {
//     name: "Bar"
// }

// USER_OBJ.name = "Bar";
// console.log(USER_OBJ)


// const fruits = ["Apple", "Banana"];

// fruits = ["Apple", "Oranges"]


// fruits.push("Oranges")















// OBJECTS LITERALS
let userOne = {
    email: "test@test.com",
    age: 32,
    isAdmin: true,
    friends: ["foo", "bar", "bam"],
    address: {
        city: "HYD",
        street: "201, Main Road"
    },
    dob: new Date("Dec 20, 1998"),
    getDetails: function () {
        return this.email + " - " + this.age;
    }
}

console.log(userOne.getDetails());

console.log(userOne.friends);

// DESTRUCTURING : "unpacking the collection"

let [f1, f2, f3, f4] = userOne.friends;

f3 = "baz";

console.log(userOne.friends[2]);        // baz

let { street: s1, city: c1 } = userOne.address;

console.log(s1, c1)


let users = [
    { email: "foo@test", age: 21 },
    { email: "bar@test", age: 22 },
    { email: "bam@test", age: 23 },
]

let [
    { email: e1, age: a1 },
    { email: e2, age: a2 },
    { email: e3, age: a3 }] = users;

console.log(e1, e2, e3);