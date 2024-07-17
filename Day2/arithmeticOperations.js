//Activity 1: Arithmetic Operations
 
// Task 1: Add two numbers and log the result to the console

const add = (a, b) => {
  const result = a + b;
  console.log(`the result of ${a} + ${b} is ${result}`);
}

// Call the add function with example values
add(5, 3); // The result of 5 + 3 is 8

// Task 2: Subtract two numbers and log the result to the console

const sub = (a, b) => {
    const result = a - b;
    console.log(`the result of ${a} - ${b} is ${result}`);
}
  
// Call the sub function with example values
sub(5, 3); // The result of 5 - 3 is 2

// Task 3: Multiply two numbers and log the result to the console

const multiply = (a, b) => {
    const result = a * b;
    console.log(`the result of ${a} * ${b} is ${result}`)
}

//Call the multiply function with example values 
multiply(6, 4); // The result of 6 * 4 is 24

// Task 4: Divide two numbers and log the result to the console
const divide = (a, b) => {
    if (b !== 0) {
        const result = a / b;
        console.log(`The result of ${a} / ${b} is ${result}`);
    } else {
        console.log('Division by zero is not allowed.');
    }
};

// Call the divide function with example values
divide(20, 4); // The result of 20 / 4 is 5
divide(20, 0); // Division by zero is not allowed.

// Task 5: Find the remainder when one number is divided by another and log the result to the console
const remainder = (a, b) => {
    const result = a % b;
    console.log(`The remainder when ${a} is divided by ${b} is ${result}`);
};

// Call the remainder function with example values
remainder(10, 3); // The remainder when 10 is divided by 3 is 1
