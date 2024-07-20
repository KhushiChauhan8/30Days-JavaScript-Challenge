// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(6, 7));  // Example: 42
console.log(multiply(6));  // Example: 6

console.log("");

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
console.log("Task 8: Return a greeting message with name and age");
function greet(name, age = 'unknown') {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("John", 30));  // Example: Hello, John! You are 30 years old.
console.log(greet("John"));  // Example: Hello, John! You are unknown years old.

console.log("");