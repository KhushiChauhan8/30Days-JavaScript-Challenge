// Activity 2: Function Expression

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