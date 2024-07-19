// Feature Request
// 1. Array Manipulation Script

let arrayManipulation = [10, 20, 30];
arrayManipulation.push(40);
console.log("Array after push:", arrayManipulation);
arrayManipulation.pop();
console.log("Array after pop:", arrayManipulation);
arrayManipulation.shift();
console.log("Array after shift:", arrayManipulation);
arrayManipulation.unshift(5);
console.log("Array after unshift:", arrayManipulation);

// 2. Array Transformation Script

let arrayTransform = [1, 2, 3, 4, 5];
let doubledArray = arrayTransform.map(num => num * 2);
console.log("Doubled Array:", doubledArray);
let evenArray = arrayTransform.filter(num => num % 2 === 0);
console.log("Even Array:", evenArray);
let arraySum = arrayTransform.reduce((acc, num) => acc + num, 0);
console.log("Sum of Array:", arraySum);

// 3. Array Iteration Script

let iterateArray = [1, 2, 3, 4, 5];
console.log("Iterating using for loop:");
for (let i = 0; i < iterateArray.length; i++) {
  console.log(iterateArray[i]);
}
console.log("Iterating using forEach:");
iterateArray.forEach(num => console.log(num));

// 4. Two-dimensional Array Script

let twoDArray = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];
console.log("Two-dimensional Array:", twoDArray);
let element = twoDArray[2][1]; // Accessing element at third row, second column
console.log("Specific Element:", element);
