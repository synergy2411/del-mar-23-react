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
// let userOne = {
//     email: "test@test.com",
//     age: 32,
//     isAdmin: true,
//     friends: ["foo", "bar", "bam"],
//     address: {
//         city: "HYD",
//         street: "201, Main Road"
//     },
//     dob: new Date("Dec 20, 1998"),
//     getDetails: function () {
//         return this.email + " - " + this.age;
//     }
// }

// console.log(userOne.getDetails());

// console.log(userOne.friends);

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





// let sum = (n1, n2) => {
//     return n1 + n2;
// }

// let mul = (n1, n2) => n1 * n2;

// let square = val => val * val;

// console.log(sum(12, 34))

// console.log(mul(2, 3));

// console.log(square(4))


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
// let userTwo = {
//     firstName: "john",
//     lastName: "doe",
//     getFullName: function () {
//         const dummy = () => this.firstName + " " + this.lastName;
//         return dummy();
//     }
// }


// console.log(userTwo.getFullName());


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


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         return this.name + " is able to walk!"
//     }
// }

// class Student extends Person {

//     #studId;
//     constructor(studId, studName) {
//         super(studName);
//         this.#studId = studId;
//     }

//     getDetails() {
//         return this.#studId + ": " + super.studName;
//     }

//     walk() {
//         return super.walk() + "Also can swim"
//     }

// }

// let john = new Student("S001", "John Doe")

// console.log(john.getDetails())
// console.log(john.walk());



// ARRAY FUNCTIONS

// let numbers = [101, 103, 104, 102, 108];

// let newArray = numbers.map(function (value, index, array) {
//     // console.log(value, index, array);
//     return value + 10;
// })

// let addTen = numbers.map(value => value + 10)

// // console.log("ADD TEN : ", addTen)
// // console.log("NEW ARRAY :", newArray);

// let filteredArray = numbers.filter(val => val > 103)
// // console.log("FILTERED ARRAY : ", filteredArray);

// let foundItem = numbers.find(val => val > 110)
// // console.log("FOUND ITEM : ", foundItem);

// let position = numbers.findIndex(val => val > 102)
// // console.log("INDEX VALUE : ", position);

// // find, findIndex, forEach

// for (let val of numbers) {
//     console.log("VAL : ", val)
// }


// for (let key in window) {
//     console.log(key)
// }








// DEFAULT

// function demo(email = "test@test", age) {
//     console.log(email, age)
// }

// demo("john@test")
// demo(undefined, 21)



// REST (...)
// - creates collection from individual items
// - has to be last argument of args list

// const demo = (email, ...args) => {
//     console.log(args[0]);           // ?
// }

// demo("test@test")
// demo("test@test", 32)
// demo("test@test", 32, true)



// SPREAD (...)
// - spread the collecion into individual item

// let friends = ["Ross", "Rachel", "Joe"];

// let moreFriends = ["Monica", "Chandler", ...friends];

// console.log(moreFriends);

// let userOne = { name: "James", age: 32 };

// let userTwo = { ...userOne, age: 21 }

// console.log(userTwo)


// TEMPLATE LITERALS : " " | ' ' | ` ` (back tick)
// - embed the variable within string without (+)
// - multiline string without \n


// let username = "jenny doe";
// let age = 23;
// let str = ` Hello I Am ${username},
//     I'm ${age} years old!
//     `

// console.log(str);










// PROMISE
// - pending
// - settled
// - success / resolved
// - rejected

// producer code
// function demoPromise(ms) {
//     const promise = new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             if (ms > 2000) {
//                 rejected(new Error("Waiting too long"))
//             }
//             resolved({ data: "SUCCESS" })
//         }, ms);
//     })
//     return promise;
// }


// consumer code
// - then().catch()
// function promiseConsumer() {
//     demoPromise(1000)
//         .then((response) => {
//             console.log(response);
//             return response.data
//         })
//         .then(result => console.log("RESULT : ", result))
//         .catch(err => console.log("ERROR : ", err))
// }

// promiseConsumer()

// - Async...await

// async function promiseConsumer() {
//     try {
//         let response = await demoPromise(3000)
//         console.log("RESPONSE : ", response)
//     } catch (err) {
//         console.log(err)
//     }
// }

// promiseConsumer()






// console.log("START")
// setTimeout(() => { console.log("TIMER") }, 0)
// Promise.resolve().then(() => console.log("RESOLVED"))
// console.log("END")



// SYNC
// ASYNC
// - MICRO - PROMISE(), QUEUEMICRO()
// - MACRO - SETTIMEOUT


// let nums = [2, 3, 4, 5, 6];

// console.log("Hello".includes('xyz'))



let employees = [
    { empId: "e001", salary: 10000, name: "John" },
    { empId: "e002", salary: 12000, name: "Jenny" },
    { empId: "e003", salary: 14000, name: "James" },
    { empId: "e004", salary: 20000, name: "Jill" },
    { empId: "e005", salary: 8000, name: "Jack" },
]

let calculateAvgSalary = (employees) => {
    let totSalary = 0;
    for (let emp of employees) {
        totSalary += emp.salary
    }
    return totSalary / employees.length
}

let employeeEarningMoreThenAvgSalary = (avgSalary, employees) => {
    return employees.filter(emp => emp.salary > avgSalary)
}

console.log("AVERAGE SALARY : ", calculateAvgSalary(employees))

console.log("Employees earning more than average salary : ",
    employeeEarningMoreThenAvgSalary(calculateAvgSalary(employees), employees))