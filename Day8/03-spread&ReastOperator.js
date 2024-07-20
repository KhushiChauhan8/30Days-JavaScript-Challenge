// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log('New Array:', newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log('Sum of 1, 2, 3:', sum(1, 2, 3));
console.log('Sum of 10, 20, 30, 40:', sum(10, 20, 30, 40));