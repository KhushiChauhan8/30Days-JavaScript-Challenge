// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "City Library",
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
    ]
};
console.log("Task 5 - Library Object:", library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Task 6 - Library Name:", library.name);
library.books.forEach((book, index) => {
    console.log(`Task 6 - Book ${index + 1} Title:`, book.title);
});