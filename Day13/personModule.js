//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// Exporting an object representing a person
export const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
