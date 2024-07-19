// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log("Task 3:", numbers);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log("Task 4:", numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log("Task 5:", numbers);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log("Task 6:", numbers);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledNumbers = numbers.map(num => num * 2);
console.log("Task 7:", doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Task 8:", evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log("Task 9:", sumOfNumbers);