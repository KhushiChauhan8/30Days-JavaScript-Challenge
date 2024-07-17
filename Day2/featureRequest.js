// arithmeticOperations.js

// 1. Arithmetic Operations Script
// This script performs basic arithmetic operations on two numbers and logs the results.

const num1 = 10;
const num2 = 5;

console.log("Arithmetic Operations:");
console.log(`Addition of ${num1} and ${num2}:`, num1 + num2);
console.log(`Subtraction of ${num2} from ${num1}:`, num1 - num2);
console.log(`Multiplication of ${num1} and ${num2}:`, num1 * num2);
console.log(`Division of ${num1} by ${num2}:`, num1 / num2);
console.log(`Remainder of ${num1} divided by ${num2}:`, num1 % num2);

console.log("\n");

// 2. Comparison and Logical Operators Script
// This script compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

console.log("Comparison and Logical Operators:");
console.log(`${num1} is greater than ${num2}:`, num1 > num2);
console.log(`${num1} is less than ${num2}:`, num1 < num2);
console.log(`${num1} is equal to ${num2}:`, num1 == num2);
console.log(`${num1} is not equal to ${num2}:`, num1 != num2);
console.log(`${num1} is greater than or equal to ${num2}:`, num1 >= num2);
console.log(`${num1} is less than or equal to ${num2}:`, num1 <= num2);

// Logical Operators
const condition1 = num1 > 0;
const condition2 = num2 < 10;
console.log(`Both conditions are true:`, condition1 && condition2);
console.log(`At least one condition is true:`, condition1 || condition2);
console.log(`Negation of condition1:`, !condition1);

console.log("\n");

// 3. Ternary Operator Script
// This script uses the ternary operator to determine if a number is positive or negative and logs the result.

const number = -3;
const result = number >= 0 ? "positive" : "negative";
console.log(`The number ${number} is ${result}.`);
