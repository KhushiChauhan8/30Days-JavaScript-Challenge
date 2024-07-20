// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("Task 8 - Iterating over Book Object Properties:");
for (const prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Task 9 - Book Object Keys:", Object.keys(book));
console.log("Task 9 - Book Object Values:", Object.values(book));