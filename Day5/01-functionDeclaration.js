// Activity 1: Function Declaration

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