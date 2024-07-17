// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    let result = (num % 2 === 0) ? 'Even' : 'Odd';
    console.log(`${num} is ${result}.`);
}
checkEvenOdd(7);  // Change this number to test different cases