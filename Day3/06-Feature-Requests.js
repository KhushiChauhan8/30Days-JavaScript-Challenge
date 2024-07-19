// Feature Requests

// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
function featureNumberCheck(num) {
    if (num > 0) {
        console.log(`Feature: ${num} is positive.`);
    } else if (num < 0) {
        console.log(`Feature: ${num} is negative.`);
    } else {
        console.log(`Feature: ${num} is zero.`);
    }
}
featureNumberCheck(10);  // Change this number to test different cases

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
function featureVotingEligibility(age) {
    if (age >= 18) {
        console.log('Feature: You are eligible to vote.');
    } else {
        console.log('Feature: You are not eligible to vote.');
    }
}
featureVotingEligibility(17);  // Change this age to test different cases

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
function featureDayOfWeek(dayNum) {
    switch (dayNum) {
        case 1:
            console.log('Feature: Sunday');
            break;
        case 2:
            console.log('Feature: Monday');
            break;
        case 3:
            console.log('Feature: Tuesday');
            break;
        case 4:
            console.log('Feature: Wednesday');
            break;
        case 5:
            console.log('Feature: Thursday');
            break;
        case 6:
            console.log('Feature: Friday');
            break;
        case 7:
            console.log('Feature: Saturday');
            break;
        default:
            console.log('Feature: Invalid day number.');
    }
}
featureDayOfWeek(5);  // Change this number to test different cases

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
function featureAssignGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log(`Feature: Your grade is: ${grade}`);
}
featureAssignGrade(92);  // Change this score to test different cases

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
function featureCheckLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`Feature: ${year} is a leap year.`);
    } else {
        console.log(`Feature: ${year} is not a leap year.`);
    }
}
featureCheckLeapYear(2023);  // Change this year to test different cases
