// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 5; // You can change this number to calculate the factorial of any number.
let factorial = 1;
let j = 1;
do {
    factorial *= j;
    j++;
} while (j <= number);
console.log(`Factorial of ${number} is ${factorial}`);