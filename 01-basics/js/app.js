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

// let [f1, f2, f3, f4] = userOne.friends;

// f3 = "baz";

// console.log(userOne.friends[2]);        // baz

// let { street: s1, city: c1 } = userOne.address;

// console.log(s1, c1)


// let users = [
//     { email: "foo@test", age: 21 },
//     { email: "bar@test", age: 22 },
//     { email: "bam@test", age: 23 },
// ]

// let [
//     { email: e1, age: a1 },
//     { email: e2, age: a2 },
//     { email: e3, age: a3 }] = users;

// console.log(e1, e2, e3);





let sum = (n1, n2) => {
    return n1 + n2;
}

let mul = (n1, n2) => n1 * n2;

let square = val => val * val;

console.log(sum(12, 34))

console.log(mul(2, 3));

console.log(square(4))

// LIMITATION
// - Does not have 'arguments' keyword
// - Can't call arrow function with 'new' keyword
// - Doesn't contain their own 'this' keyword reference


// let userTwo = {
//     firstName: "john",
//     lastName: "doe",
//     getFullName: function () {
//         // this keyword
//         // return this.firstName + " " + this.lastName;
//         let that = this;
//         function dummy() {
//             // this keyword
//             return that.firstName + " " + that.lastName;
//         }
//         return dummy();
//     }
// }
let userTwo = {
    firstName: "john",
    lastName: "doe",
    getFullName: function () {
        const dummy = () => this.firstName + " " + this.lastName;
        return dummy();
    }
}


console.log(userTwo.getFullName());


// Scope Chaining

// let x = 301;

// function a() {
//     let x = 201;

//     function b() {
//         console.log(x)
//     }
//     b();
// }

// a();





// function Person(firstName, lastName){}

// let john = new Person("foo", "bar")


// Object.create()         // instance method


// function demo() {
//     console.log(arguments);
// }

// demo("test@test")
// demo("test@test", 32)
// demo("test@test", 32, true)