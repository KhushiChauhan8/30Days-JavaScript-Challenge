// Activity 3: Comparison Operators

// Task 8: Compare two numbers using > and < and log the result to the console
const compareGreaterLesser = (a, b) => {
    console.log(`${a} > ${b} is ${a > b}`);
    console.log(`${a} < ${b} is ${a < b}`);
};

// Call the compareGreaterLesser function with example values
compareGreaterLesser(10, 5); // 10 > 5 is true, 10 < 5 is false

// Task 9: Compare two numbers using >= and <= and log the result to the console
const compareGreaterEqualLesserEqual = (a, b) => {
    console.log(`${a} >= ${b} is ${a >= b}`);
    console.log(`${a} <= ${b} is ${a <= b}`);
};

// Call the compareGreaterEqualLesserEqual function with example values
compareGreaterEqualLesserEqual(10, 10); // 10 >= 10 is true, 10 <= 10 is true

// Task 10: Compare two numbers using == and === and log the result to the console
const compareEqualStrictEqual = (a, b) => {
    console.log(`${a} == ${b} is ${a == b}`);
    console.log(`${a} === ${b} is ${a === b}`);
};

// Call the compareEqualStrictEqual function with example values
compareEqualStrictEqual(5, '5'); // 5 == '5' is true, 5 === '5' is false
compareEqualStrictEqual(5, 5); // 5 == 5 is true, 5 === 5 is true
