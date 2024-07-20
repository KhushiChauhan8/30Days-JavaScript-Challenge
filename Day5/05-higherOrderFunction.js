// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
repeatFunction(() => console.log("Hello!"), 3);  // Example: Hello! (3 times)

console.log("");

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
console.log(applyFunctions(calculateSquare, Math.sqrt, 16));  // Example: 4

console.log("");