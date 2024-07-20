// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
  }
  console.log('Multiply 5 by 3:', multiply(5, 3));
  console.log('Multiply 5 by default value:', multiply(5));