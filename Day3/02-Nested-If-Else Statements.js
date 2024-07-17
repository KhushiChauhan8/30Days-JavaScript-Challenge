// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            console.log(`${a} is the largest.`);
        } else {
            console.log(`${c} is the largest.`);
        }
    } else {
        if (b >= c) {
            console.log(`${b} is the largest.`);
        } else {
            console.log(`${c} is the largest.`);
        }
    }
}
findLargest(3, 5, 1);  // Change these numbers to test different case