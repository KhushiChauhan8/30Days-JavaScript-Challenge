// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error

const str = "Can't Change me";
console.log("str = ", str);  //output: Can't Change me

try {
    str = "Trying to Change";
  } catch (error) {
    console.error("Error when reassigning const:", error.message); // Output: Assignment to constant variable.
  }