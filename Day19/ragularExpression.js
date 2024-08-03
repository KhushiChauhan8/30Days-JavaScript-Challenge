// Activity 1: Basic Regular Expressions
// Task 1: Match all occurrences of the word "JavaScript" in a string
let str1 = "JavaScript is a versatile language. Many developers love JavaScript.";
let regex1 = /JavaScript/g;
let matches1 = str1.match(regex1);
console.log('Matches for "JavaScript":', matches1);

// Task 2: Match all digits in a string
let str2 = "The year is 2024 and the time is 12:34.";
let regex2 = /\d+/g;
let matches2 = str2.match(regex2);
console.log('Matches for digits:', matches2);

// Activity 2: Character Classes and Quantifiers
// Task 3: Match all words in a string that start with a capital letter
let str3 = "Alice went to Wonderland. She met the Cheshire Cat.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log('Matches for capitalized words:', matches3);

// Task 4: Match all sequences of one or more digits in a string
let str4 = "My phone number is 123-456-7890 and my zip code is 98765.";
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
console.log('Matches for sequences of digits:', matches4);

// Activity 3: Grouping and Capturing
// Task 5: Capture area code, central office code, and line number from a US phone number
let str5 = "(123) 456-7890";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log('Captures for phone number:', matches5);

// Task 6: Capture username and domain from an email address
let str6 = "contact@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = str6.match(regex6);
console.log('Captures for email address:', matches6);

// Activity 4: Assertions and Boundaries
// Task 7: Match a word only if it is at the beginning of a string
let str7 = "Hello, this is a test string. Hello again.";
let regex7 = /^Hello\b/g;
let matches7 = str7.match(regex7);
console.log('Matches for "Hello" at the beginning:', matches7);

// Task 8: Match a word only if it is at the end of a string
let str8 = "This is a test string. End";
let regex8 = /\bEnd$/g;
let matches8 = str8.match(regex8);
console.log('Matches for "End" at the end:', matches8);

// Activity 5: Practical Applications
// Task 9: Validate a simple password
let password = "P@ssw0rd!";
let regex9 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isPasswordValid = regex9.test(password);
console.log('Is password valid:', isPasswordValid);

// Task 10: Validate a URL
let url = "https://www.example.com";
let regex10 = /^(https?:\/\/)?(www\.)?[\w-]+(\.[\w-]+)+([/?].*)?$/;
let isUrlValid = regex10.test(url);
console.log('Is URL valid:', isUrlValid);

// Feature Request 1: Basic Regex Script
let basicRegexScript = () => {
    let str = "JavaScript is awesome. JavaScript is fun!";
    let regex = /JavaScript/g;
    let matches = str.match(regex);
    console.log('Basic Regex Script - Matches for "JavaScript":', matches);
};
basicRegexScript();

// Feature Request 2: Character Classes and Quantifiers Script
let charClassScript = () => {
    let str = "John has 2 apples and 15 bananas.";
    let regex = /\b[A-Z][a-z]*\b/g;
    let matches = str.match(regex);
    console.log('Character Classes Script - Matches for capitalized words:', matches);
};
charClassScript();

// Feature Request 3: Grouping and Capturing Script
let groupingScript = () => {
    let str = "Email me at john.doe@example.com or call me at (555) 123-4567.";
    let emailRegex = /(\w+.\w+)@(\w+\.\w+)/;
    let phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    let emailMatches = str.match(emailRegex);
    let phoneMatches = str.match(phoneRegex);
    console.log('Grouping Script - Email captures:', emailMatches);
    console.log('Grouping Script - Phone captures:', phoneMatches);
};
groupingScript();

// Feature Request 4: Assertions and Boundaries Script
let assertionScript = () => {
    let str = "Start of the string. End";
    let startRegex = /^Start\b/g;
    let endRegex = /\bEnd$/g;
    let startMatches = str.match(startRegex);
    let endMatches = str.match(endRegex);
    console.log('Assertions Script - Matches for "Start" at the beginning:', startMatches);
    console.log('Assertions Script - Matches for "End" at the end:', endMatches);
};
assertionScript();

// Feature Request 5: Validation Script
let validationScript = () => {
    let password = "ValidP@ss1";
    let url = "http://example.com";
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let urlRegex = /^(https?:\/\/)?(www\.)?[\w-]+(\.[\w-]+)+([/?].*)?$/;
    let isPasswordValid = passwordRegex.test(password);
    let isUrlValid = urlRegex.test(url);
    console.log('Validation Script - Is password valid:', isPasswordValid);
    console.log('Validation Script - Is URL valid:', isUrlValid);
};
validationScript();
