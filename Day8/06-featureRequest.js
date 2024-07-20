// Day 8: ES6+ Features - Feature Requests

// Feature 1: Template Literals Script
// Demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
const firstName = 'Sarah';
const age = 28;
const greeting = `Hi, I'm ${firstName} and I am ${age} years old.`;
console.log('Template Literals - Greeting:', greeting);

const multiLine = `
This is an example of a multi-line string
created using template literals. It spans
multiple lines and preserves the formatting.
`;
console.log('Template Literals - Multi-line:', multiLine);

// Feature 2: Destructuring Script
// Demonstrates the use of array and object destructuring to extract values and log them.
const colors = ['red', 'green', 'blue'];
const [color1, color2] = colors;
console.log('Destructuring - Colors:', `Color1: ${color1}, Color2: ${color2}`);

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022
};
const { make, model } = car;
console.log('Destructuring - Car:', `Make: ${make}, Model: ${model}`);

// Feature 3: Spread and Rest Operators Script
// Demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log('Spread Operator - Combined Array:', combinedArray);

function concatenateStrings(...strings) {
  return strings.join(' ');
}
console.log('Rest Operator - Concatenate Strings:', concatenateStrings('Hello', 'world', 'this', 'is', 'JavaScript'));

// Feature 4: Default Parameters Script
// Demonstrates the use of default parameters in a function and logs the results of calling it with different arguments.
function greetUser(name = 'Guest', greeting = 'Welcome') {
  return `${greeting}, ${name}!`;
}
console.log('Default Parameters - Greet User:', greetUser('Alice', 'Hello'));
console.log('Default Parameters - Greet User (Default Greeting):', greetUser('Bob'));

// Feature 5: Enhanced Object Literals Script
// Demonstrates enhanced object literals to create and log an object with methods and computed property names.
const userName = 'Charlie';
const userAge = 35;

const userProfile = {
  userName,
  userAge,
  introduce() {
    return `Hi, I am ${this.userName} and I am ${this.userAge} years old.`;
  },
  ['user-' + userName]: 'Profile'
};
console.log('Enhanced Object Literals - User Profile:', userProfile);
console.log('Introduction Method:', userProfile.introduce());
