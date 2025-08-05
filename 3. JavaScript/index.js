// Basic JavaScript Examples
// This file demonstrates fundamental JavaScript concepts

// 1. Variables and Data Types
console.log("=== Variables and Data Types ===");

// Let and const declarations
let name = "John Doe";
const age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = {
    firstName: "Jane",
    lastName: "Smith",
    occupation: "Developer"
};

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Person:", person);

// 2. Functions
console.log("\n=== Functions ===");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Function with multiple parameters
function calculateArea(length, width) {
    return length * width;
}

console.log(greet("Alice"));
console.log("5 + 3 =", add(5, 3));
console.log("Area of 4x6 rectangle:", calculateArea(4, 6));

// 3. Control Structures
console.log("\n=== Control Structures ===");

// If-else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// For loop
console.log("Numbers 1-5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 4. Array Methods
console.log("\n=== Array Methods ===");

let numbers = [1, 2, 3, 4, 5];

// Map - transform each element
let squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared);

// Filter - get elements that meet a condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Reduce - combine all elements into a single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

// 5. Object Manipulation
console.log("\n=== Object Manipulation ===");

let student = {
    name: "Bob Wilson",
    age: 20,
    courses: ["Math", "Physics", "Chemistry"]
};

// Accessing properties
console.log("Student name:", student.name);
console.log("Student courses:", student.courses);

// Adding new properties
student.gpa = 3.8;
student.graduated = false;

console.log("Updated student:", student);

// 6. ES6 Features
console.log("\n=== ES6 Features ===");

// Destructuring
const { firstName, lastName } = person;
console.log("First name:", firstName);
console.log("Last name:", lastName);

// Spread operator
let moreHobbies = [...hobbies, "photography", "traveling"];
console.log("Extended hobbies:", moreHobbies);

// Template literals
let introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction);

// 7. Simple Class Example
console.log("\n=== Classes ===");

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }

    start() {
        return `${this.getInfo()} is starting...`;
    }
}

let myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getInfo());
console.log(myCar.start());

console.log("\n=== End of Basic JavaScript Examples ===");
