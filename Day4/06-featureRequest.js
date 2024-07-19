// Feature Requests
console.log("Feature Requests");

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
console.log("Feature Request 1: Number Printing Script using for loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Feature Request 1: Number Printing Script using while loop");
let k = 1;
while (k <= 10) {
    console.log(k);
    k++;
}

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
console.log("Feature Request 2: Multiplication Table Script");
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
console.log("Feature Request 3: Pattern Printing Script");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
console.log("Feature Request 4: Sum Calculation Script");
let total = 0;
let n = 1;
while (n <= 10) {
    total += n;
    n++;
}
console.log("Sum:", total);

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
console.log("Feature Request 5: Factorial Calculation Script");
let numToFactorial = 5; // Change this number to calculate the factorial of a different number.
let fact = 1;
let m = 1;
do {
    fact *= m;
    m++;
} while (m <= numToFactorial);
console.log(`Factorial of ${numToFactorial} is ${fact}`);
