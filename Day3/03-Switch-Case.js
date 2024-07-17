// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function getDayOfWeek(dayNum) {
    switch (dayNum) {
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thursday');
            break;
        case 6:
            console.log('Friday');
            break;
        case 7:
            console.log('Saturday');
            break;
        default:
            console.log('Invalid day number.');
    }
}
getDayOfWeek(3);  // Change this number to test different cases

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
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
    console.log(`Your grade is: ${grade}`);
}
assignGrade(85);  // Change this score to test different cases