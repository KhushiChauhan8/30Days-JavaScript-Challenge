//Activity 4: Using Third-Party Modules
//Task 6: Install a third-party module (e.g., lodash) using a CDN. Import and use a function from this module in a script.

// Importing specific functions from lodash using named import
import { chunk } from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js';

const array = [1, 2, 3, 4, 5];
console.log("Lodash Chunk Function Result:", chunk(array, 2)); // Output: [[1, 2], [3, 4], [5]]


