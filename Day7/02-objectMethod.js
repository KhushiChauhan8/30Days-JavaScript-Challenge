// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log("Task 3 - Book Details:", book.getDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(2020);
console.log("Task 4 - Updated Book Object:", book);