// BLOCK
// acessing variable inside the block.

function example() {
    if (true) {
        let bv = "wxzy";
        console.log(bv);
    }
}

example();

(
    function car() {
        console.log("hEYYY");
    }
)();


// Object

let student = {
    name: "ashish",
    age: 12,
    class: 7
}

console.log(student);
console.log(typeof student);





let age = 21;
let country = "Nepal";

if (age >= 23 && country == "Nepal") {
    console.log("Daamnn you still on nepal");
}
else {
    console.log("Okay carry on");
};


//for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//for loop
// let coding = ["Java", "JS", "Python"];

// for (i = 0; i <= 10; i++) {
//     console.log(coding[0]);
// }


//for loop inner loop

// for (i = 1; i <= 5; i++) {
//     console.log(i);
//     // inner
//     for (let j = 1; j <= 3; j++) {
//         console.log("Inner loop" + j);
//     }
// }


// while loop
// let i=0;

// while(i<=10){
//     console.log(i);
//     i++;
// }

// do while loop
let i = 1;
do {
    console.log(2 * i)
    i++;
}
while (i <= 10);

// // function
function greet() {
    console.log("Heyyy");
}
greet();


// ex function parameter and arguments

function greet(firstName, lastName) {
    console.log("hello " + firstName + " " + lastName);
}
greet("elon", "musk");
greet("exzyy", "loxzyy");



//-------- Ex function return;

function add(a, b) {
    return a + b;
}
let result = add(10, 20)
console.log("The sum is " + result);




//ex function default parameter

function sum(x, y) {
    console.log(x + y);
}
sum(10, 15);


// MycallBack
// function display(result) {
//     console.log(result);
// }
// function add(num1, num2, mycallback) {
//     let sum = num1 + num2
//     mycallback(sum);
// }
// add(10, 2, display);

// callback

function display(result) {
    console.log(result);
}
function subtract(num2, num1, mycallback) {
    let x = num2 - num1
    mycallback(x)
}
subtract(21, 2, display);





// array to print a to z
const alphabetArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode('A'.charCodeAt(0) + index));

console.log(alphabetArray);


// simple callback
function display(result) {
    console.log(result);
}
function multiply(num1, num2, mycallback) {
    let x = num1 * num2;
    mycallback(x);
}
multiply(2, 3, display);


// function callback
function display(result) {
    console.log("the sum is " + result);
}
function calculatesum(num1, num2, mycallback) {
    let x = num1 + num2
    mycallback(x);
}
calculatesum(10, 2, display);


// array and callback function 

let num = [1, 2, 3, 4, 68, 7];

function display(result) {
    console.log(result);
}
function Filtereven(numbers, mycallback) {
    let x = numbers.filter(num => num % 2 === 0) //arrow
    mycallback(x);
}
Filtereven(num, display);


// callback 

var names = ["abc", "def", "ghi"];

function display(result) {
    console.log(result);
}

function convertToUpperCase(strings, mycallback) {
    mycallback(strings.map(str => str.toUpperCase()));
}

convertToUpperCase(names, display);




//callback ex 2 ( filtering even from numbers )
let nume = [1, 2, 3, 4, 5];

function display(result) {

    console.log(result);
}
function Filtereven(number, mycallback) {

    let x = number.filter(num => num % 2 === 0)

    mycallback(x);
}

Filtereven(nume, display);


//calback ex3 9 ( multiplying ) 

function display(result) {
    console.log(result);
}
function multiply(num1, num2, mycallback) {
    let x = num1 * num2
    mycallback(x);
}
multiply(10, 2, display);

// function ex1
function greet() {
    console.log("Heyyy bro");
}
greet();

//function ex2

function greet(firstName, lastName,) {

    console.log("heyy " + firstName + " " + lastName)

}

greet("exzyy", "loxzyy", 2023);

//object

const Car = {
    Name: "Porche",
    Company: "Hundai",
    Model_No: 911,
    Owner_Name: "AShish",
    address: {
        Location: "kathmandu",
        Phone: 1234567,
        Street: "124 Ave Ktm",
        gender: "male",
        office: "pokhara",
    }
}
console.log(Car
);


// checking objects properties using for loop

const school = {
    Name: "Islington",
    Location: "kathmandu",
    contact: 1234567,
    No_of_students: "100k"
}

for (let prop in school) {
    console.log(prop + ":" + school[prop]);
}



// another way to create object using new keyword

const laptop = new Object()

laptop.Name = "Thinpad";
laptop.Brand = "Lenovo";
laptop.Country = "China";
laptop.Model = "1234567890kou"
laptop.Working = "Fine"

console.log(laptop);


//new object can done like this too
const Lenovo = new Object({
    Name: "MacBook M1",
    Brand: "Apple",
    Country: "USA",
    Model: "1234567ko90kou",
    Working: {
        condition: "fine",
        fixed: "okay",
        Total_time: "12hr"
    }
});

console.log(Lenovo);

// OBJ IN JS WITH NEW KEYWORD
const employee = new Object({
    Name: "Exzzy",
    Place: "Kathmandu",
    Joined_Date: "2023-Dec-18",
    work: "Developent",
    Type: "Intern"

})
// to aceess property
for (let prop in employee) {
    console.log(prop + ":" + [prop]);
}


//methods in js and this keyword
const company = {
    Name: "Meta",
    location: "USA",
    Established: 2002,
    Joined_Year: 2024,
    greet() {
        console.log("The detail of the comapany is " +
            this.Name + " " + this.location + " " + this.Established + " " + this.Joined_Year);
    }
}
company.greet();


// constructor function
function companyx(first, last) {
    this.firstName = first,
        this.lastName = last

    // this.fullname = function () {
    //     return this.firstName + " " + this.lastName;
    // }
}

const company1 = new companyx("exzyy", "loxzyy");
const company2 = new companyx("exz", "lozyy");


console.log(company2);





//prototype function

function Game(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Game.prototype = { Year: 2002 };
const Game1 = new Game("GTA", "five");

Game.prototype = { Year: 2004 };
const Game2 = new Game("RDR", "Seven");

console.log(Game2);
console.log(Game1);


//obj destrucing

const chromex = {
    firstName: "bowser",
    lastName: "Iconginto",

}
let { firstName, lastName, year = 2004 } = chromex;

console.log(year);

//obj destructuring
const Laptop = {
    Name: "Msi",
    Modelno: 273,
    Countryo: "china",
}
let { Name, Modelno, countryo, x = 21 } = Laptop;
console.log(Laptop);



//CLass
class employeep {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    set personName(newName) {
        this.name = newName
    }
    get personName() {
        return "hello " + this.name;
    }
}

const employee1 = new employeep("exzy", 26);

console.log(employee1.personName);

employee1.personName = "loxzyy";
console.log(employee1.personName);


//obj
function perosn(name, age) {
    this.name = name,
        this.age = age
}

const perosn1 = new perosn("exzyy", 36);

console.log(perosn1);


// class inheritance

class weather {
    constructor(name) {
        this.name = name;

    }
    greet() {
        console.log("Heyyy " + this.name);
    }
}
class studentW extends weather {

}
const student1 = new studentW("Exzyy");

student1.greet();


// super methods

class excel {
    constructor(name) {
        this.name = name;

    }
    greet() {
        console.log("Heyy " + this.name);
    }
}
class microsoft extends excel {
    constructor(name) {
        super(name);
    }
}

const microsoft1 = new microsoft("ms word");
microsoft1.greet();

//method overiding

class gta {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("This game is " + this.name);
    }
}

class rdr extends gta {
    greet() {
        console.log("Heyyy this game is " + this.name);
    }
}

const rdr1 = new rdr("red dead redemption");
rdr1.greet();

// static

class battery {
    constructor(name) {
        this.name = name;
    }
    static greet() {
        console.log("The model of battery is " + this.name);
    }
}

const battery1 = new battery("X00911");
battery.greet(battery1);
