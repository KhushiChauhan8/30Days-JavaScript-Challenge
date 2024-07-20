// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};
console.log("Task 7 - Title and Year:", book.getTitleAndYear());