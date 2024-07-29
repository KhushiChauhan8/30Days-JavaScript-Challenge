// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    // Method to return a greeting message
    greeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  
    // Task 2: Method to update the age property and log the updated age
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  // Create an instance of the Person class and log the greeting message
  const person1 = new Person("John", "Doe", 30);
  console.log(person1.greeting());
  
  // Update age and log the updated age
  person1.updateAge(35);
  
  // Activity 2: Class Inheritance
  
  // Task 3: Define a class Student that extends the Person class
  class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
      super(firstName, lastName, age);
      this.studentId = studentId;
    }
  
    // Method to return the student ID
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  
    // Task 4: Override the greeting method to include the student ID in the message
    greeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  // Create an instance of the Student class and log the student ID
  const student1 = new Student("Jane", "Smith", 20, "S12345");
  console.log(student1.getStudentId());
  
  // Log the overridden greeting message
  console.log(student1.greeting());
  
  // Activity 3: Static Methods and Properties
  
  // Task 5: Add a static method to the Person class that returns a generic greeting message
  Person.genericGreeting = function () {
    return "Hello! This is a generic greeting.";
  };
  
  // Call the static method without creating an instance of the class and log the message
  console.log(Person.genericGreeting());
  
  // Task 6: Add a static property to the Student class to keep track of the number of students created
  Student.studentCount = 0;
  
  class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
      super(firstName, lastName, age);
      this.studentId = studentId;
      Student.studentCount++;
    }
  
    // Method to return the student ID
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  
    // Override the greeting method to include the student ID in the message
    greeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  // Create instances of the Student class
  const student2 = new Student("Alice", "Johnson", 22, "S67890");
  const student3 = new Student("Bob", "Brown", 25, "S54321");
  
  // Log the total number of students
  console.log(`Total number of students: ${Student.studentCount}`);
  
  // Activity 4: Getters and Setters
  
  // Task 7: Add a getter method to the Person class to return the full name
  Object.defineProperty(Person.prototype, 'fullName', {
    get: function () {
      return `${this.firstName} ${this.lastName}`;
    }
  });
  
  // Create an instance and log the full name using the getter
  const person2 = new Person("Emily", "Davis", 28);
  console.log(person2.fullName);
  
  // Task 8: Add a setter method to the Person class to update the name properties
  Object.defineProperty(Person.prototype, 'updateName', {
    set: function (name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  });
  
  // Update the name using the setter and log the updated full name
  person2.updateName = "Michael Johnson";
  console.log(person2.fullName);
  
  // Activity 5: Private Fields (Optional)
  
  // Task 9: Define a class Account with private fields for balance and methods to deposit and withdraw money
  class Account {
    #balance = 0;
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        this.#logBalance();
      } else {
        console.log("Deposit amount must be positive");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        this.#logBalance();
      } else {
        console.log("Invalid withdrawal amount");
      }
    }
  
    #logBalance() {
      console.log(`Current balance: ${this.#balance}`);
    }
  }
  
  // Task 10: Create an instance of the Account class and test the deposit and withdraw methods
  const account1 = new Account();
  account1.deposit(100); // Current balance: 100
  account1.withdraw(30); // Current balance: 70
  account1.withdraw(100); // Invalid withdrawal amount
  