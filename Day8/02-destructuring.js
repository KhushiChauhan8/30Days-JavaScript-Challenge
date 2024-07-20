// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);