// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolveAfter2Seconds = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

resolveAfter2Seconds.then(message => console.log(message));

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const rejectAfter2Seconds = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Rejected after 2 seconds"));
    }, 2000);
});

rejectAfter2Seconds.catch(error => console.log(error.message));

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched from server");
    }, 1000);
});

fetchData
    .then(message => {
        console.log(message);
        return new Promise(resolve => setTimeout(() => resolve("Processing data"), 1000));
    })
    .then(message => {
        console.log(message);
        return new Promise(resolve => setTimeout(() => resolve("Data processed"), 1000));
    })
    .then(message => console.log(message));

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function waitForPromise() {
    const message = await resolveAfter2Seconds;
    console.log(message);
}
waitForPromise();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleRejectedPromise() {
    try {
        await rejectAfter2Seconds;
    } catch (error) {
        console.log(error.message);
    }
}
handleRejectedPromise();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
fetchDataAsync();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000));

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.log(error.message));

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
    .then(value => console.log(value))
    .catch(error => console.log(error.message));

// Feature Requests

// 1. Promise Creation Script: Demonstrates creating and handling promises, including both resolved and rejected states.
const createPromise = (shouldResolve) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve("Promise resolved!");
            } else {
                reject(new Error("Promise rejected!"));
            }
        }, 2000);
    });
};

createPromise(true)
    .then(message => console.log(message))
    .catch(error => console.log(error.message));

createPromise(false)
    .then(message => console.log(message))
    .catch(error => console.log(error.message));

// 2. Promise Chaining Script: Chains multiple promises and logs messages in a specific sequence.
const chainPromises = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First promise resolved");
        }, 1000);
    })
    .then(message => {
        console.log(message);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Second promise resolved");
            }, 1000);
        });
    })
    .then(message => {
        console.log(message);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Third promise resolved");
            }, 1000);
        });
    })
    .then(message => console.log(message));
};
chainPromises();

// 3. Async/Await Script: Uses async/await to handle promises and includes error handling with try-catch.
const asyncAwaitDemo = async (shouldResolve) => {
    const promise = createPromise(shouldResolve);
    try {
        const message = await promise;
        console.log(message);
    } catch (error) {
        console.log(error.message);
    }
};

asyncAwaitDemo(true);
asyncAwaitDemo(false);

// 4. API Fetch Script: Fetches data from a public API using both promises and async/await, and logs the response data.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message));

const fetchApiData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};
fetchApiData();

// 5. Concurrent Promises Script: Uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.
const concurrentPromises = async () => {
    try {
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log(results);
    } catch (error) {
        console.log(error.message);
    }
};
concurrentPromises();

const racePromises = async () => {
    try {
        const result = await Promise.race([promise1, promise2, promise3]);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};
racePromises();
