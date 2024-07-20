// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
    name: 'Alice',
    age: 25,
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  };
  console.log(person);
  console.log(person.greet());
  
  // Task 9: Create an object with computed property names based on variables and log the object to the console.
  const key1 = 'firstName';
  const key2 = 'lastName';
  const user = {
    [key1]: 'Bob',
    [key2]: 'Smith'
  };
  console.log(user);