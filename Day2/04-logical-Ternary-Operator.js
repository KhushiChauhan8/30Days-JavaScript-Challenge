// Activity 4: Logical Operators

// Task 11: Use the && operator to combine two conditions and log the result to the console
const andOperator = (a, b) => {
    console.log(`${a} > 0 && ${b} > 0 is ${a > 0 && b > 0}`);
};

// Call the andOperator function with example values
andOperator(5, 10); // 5 > 0 && 10 > 0 is true
andOperator(5, -10); // 5 > 0 && -10 > 0 is false

// Task 12: Use the || operator to combine two conditions and log the result to the console
const orOperator = (a, b) => {
    console.log(`${a} > 0 || ${b} > 0 is ${a > 0 || b > 0}`);
};

// Call the orOperator function with example values
orOperator(5, 10); // 5 > 0 || 10 > 0 is true
orOperator(-5, -10); // -5 > 0 || -10 > 0 is false

// Task 13: Use the ! operator to negate a condition and log the result to the console
const notOperator = (a) => {
    console.log(`!(${a} > 0) is ${!(a > 0)}`);
};

// Call the notOperator function with example values
notOperator(5); // !(5 > 0) is false
notOperator(-5); // !(-5 > 0) is true

// Activity 5: Ternary Operator

// Task 14: Use the ternary operator to check if a number is positive or negative and log the result to the console
const checkPositiveNegative = (num) => {
    const result = num >= 0 ? 'positive' : 'negative';
    console.log(`The number ${num} is ${result}`);
};

// Call the checkPositiveNegative function with example values
checkPositiveNegative(10); // The number 10 is positive
checkPositiveNegative(-10); // The number -10 is negative


