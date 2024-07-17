//Control structures

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}
checkNumber(5);  // Change this number to test different cases

// Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console.
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log('You are eligible to vote.');
    } else {
        console.log('You are not eligible to vote.');
    }
}
checkVotingEligibility(20);  // Change this age to test different cases