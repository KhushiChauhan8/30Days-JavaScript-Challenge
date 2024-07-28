//Task 7: Install a third-party module (e.g., axios) using a CDN. Import and use this module to make a network request in a script.

// Importing axios from a CDN and using it
// import axios from 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js';

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         console.log("Axios Get Request Result:", response.data);
//     })
//     .catch(error => {
//         console.error("Axios Get Request Error:", error);
//     });

// Using axios directly from the global variable
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log("Axios Get Request Result:", response.data);
    })
    .catch(error => {
        console.error("Axios Get Request Error:", error);
    });

