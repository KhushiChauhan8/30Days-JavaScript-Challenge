// Activity 1: Function Declaration
console.log("--- Activity 1: Function Declaration ---");

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
console.log("Task 1: Check if a number is even or odd");
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}
checkEvenOdd(5);  // Example: 5 is odd.

console.log("");

// Task 2: Write a function to calculate the square of a number and return the result.
console.log("Task 2: Calculate the square of a number");
function calculateSquare(number) {
    return number * number;
}
console.log(calculateSquare(4));  // Example: 16

console.log("");

// Activity 2: Function Expression
console.log("--- Activity 2: Function Expression ---");

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log("Task 3: Find the maximum of two numbers");
const findMax = function(a, b) {
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}.`);
}
findMax(7, 3);  // Example: The maximum of 7 and 3 is 7.

console.log("");

// Task 4: Write a function expression to concatenate two strings and return the result.
console.log("Task 4: Concatenate two strings");
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
}
console.log(concatenateStrings("Hello, ", "world!"));  // Example: Hello, world!

console.log("");

// Activity 3: Arrow Functions
console.log("--- Activity 3: Arrow Functions ---");

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.log("Task 5: Calculate the sum of two numbers");
const calculateSum = (a, b) => a + b;
console.log(calculateSum(5, 10));  // Example: 15

console.log("");

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
console.log("Task 6: Check if a string contains a specific character");
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("JavaScript", "J"));  // Example: true

console.log("");

// Activity 4: Function Parameters and Default Values
console.log("--- Activity 4: Function Parameters and Default Values ---");

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
console.log("Task 7: Return the product of two parameters with a default value");
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(6, 7));  // Example: 42
console.log(multiply(6));  // Example: 6

console.log("");

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
console.log("Task 8: Return a greeting message with name and age");
function greet(name, age = 'unknown') {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("John", 30));  // Example: Hello, John! You are 30 years old.
console.log(greet("John"));  // Example: Hello, John! You are unknown years old.

console.log("");

// Activity 5: Higher-Order Functions
console.log("--- Activity 5: Higher-Order Functions ---");

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
console.log("Task 9: Call a function multiple times");
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
repeatFunction(() => console.log("Hello!"), 3);  // Example: Hello! (3 times)

console.log("");

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
console.log("Task 10: Apply two functions in sequence");
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
console.log(applyFunctions(calculateSquare, Math.sqrt, 16));  // Example: 4

console.log("");

// Feature Requests
console.log("--- Feature Requests ---");

// 1. Even or Odd Function Script
console.log("Feature Request 1: Even or Odd Function Script");
function evenOddScript(number) {
    checkEvenOdd(number);
}
evenOddScript(8);  // Example: 8 is even.

console.log("");

// 2. Square Calculation Function Script
console.log("Feature Request 2: Square Calculation Function Script");
function squareCalculationScript(number) {
    return calculateSquare(number);
}
console.log(squareCalculationScript(5));  // Example: 25

console.log("");

// 3. Concatenation Function Script
console.log("Feature Request 3: Concatenation Function Script");
function concatenationFunctionScript(str1, str2) {
    return concatenateStrings(str1, str2);
}
console.log(concatenationFunctionScript("Good ", "morning!"));  // Example: Good morning!

console.log("");

// 4. Sum Calculation Arrow Function Script
console.log("Feature Request 4: Sum Calculation Arrow Function Script");
function sumCalculationArrowFunctionScript(a, b) {
    return calculateSum(a, b);
}
console.log(sumCalculationArrowFunctionScript(3, 4));  // Example: 7

console.log("");

// 5. Higher-Order Function Script
console.log("Feature Request 5: Higher-Order Function Script");
function higherOrderFunctionScript(func, times) {
    repeatFunction(func, times);
}
higherOrderFunctionScript(() => console.log("Hi!"), 2);  // Example: Hi! (2 times)
