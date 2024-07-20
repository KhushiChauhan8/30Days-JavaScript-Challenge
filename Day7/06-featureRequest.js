// README: Day 7 - Objects

// Feature Request 1: Book Object Script
// This script creates a book object, adds methods to it, and logs its properties and method results.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    // Method to get book details
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },

    // Method to update the book's year
    updateYear: function(newYear) {
        this.year = newYear;
    },

    // Method to get the book's title and year
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};

// Log the book object
console.log("Feature Request 1 - Book Object:", book);

// Log the book details
console.log("Feature Request 1 - Book Details:", book.getDetails());

// Update the book's year and log the updated object
book.updateYear(2020);
console.log("Feature Request 1 - Updated Book Object:", book);

// Log the title and year of the book
console.log("Feature Request 1 - Title and Year:", book.getTitleAndYear());

// Feature Request 2: Library Object Script
// This script defines a library object containing an array of book objects and logs the library's details.

const library = {
    name: "City Library",
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
    ]
};

// Log the library object
console.log("Feature Request 2 - Library Object:", library);

// Log the library's name
console.log("Feature Request 2 - Library Name:", library.name);

// Log the titles of all books in the library
library.books.forEach((book, index) => {
    console.log(`Feature Request 2 - Book ${index + 1} Title:`, book.title);
});

// Feature Request 3: Object Iteration Script
// This script demonstrates iterating over an object's properties using a for...in loop and Object.keys/Object.values methods.

console.log("Feature Request 3 - Iterating over Book Object Properties:");

// Iterate over book object's properties using for...in loop
for (const prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}

// Use Object.keys and Object.values to log all keys and values of the book object
console.log("Feature Request 3 - Book Object Keys:", Object.keys(book));
console.log("Feature Request 3 - Book Object Values:", Object.values(book));
