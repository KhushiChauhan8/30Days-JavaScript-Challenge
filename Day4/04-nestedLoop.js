// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:
console.log("Task 7: Print a pattern using nested for loops");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}