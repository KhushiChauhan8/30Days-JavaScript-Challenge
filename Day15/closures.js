// Day 15: Closures

// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    let outerVariable = 'Hello, Closure!';
    function innerFunction() {
        return outerVariable;
    }
    return innerFunction;
}
const inner = outerFunction();
console.log(inner()); // Output: Hello, Closure!

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createUniqueIdGenerator() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    };
}
const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId()); // Output: 1
console.log(generateUniqueId()); // Output: 2

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeter(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}
const greetJohn = createGreeter('John');
console.log(greetJohn()); // Output: Hello, John!

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
    const functionArray = [];
    for (let i = 0; i < 5; i++) {
        functionArray.push(function() {
            console.log(i);
        });
    }
    return functionArray;
}
const functions = createFunctionArray();
functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function() {
    const items = [];
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    };
})();
itemManager.addItem('Item 1');
itemManager.addItem('Item 2');
itemManager.removeItem('Item 1');
console.log(itemManager.listItems()); // Output: ['Item 2']

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(6)); // Output: 720 (reuses the result of memoizedFactorial(5))

// Feature Request:

// 1. Basic Closure Script
function basicClosure() {
    let outerVariable = 'Basic Closure';
    return function() {
        return outerVariable;
    };
}
const basicClosureFn = basicClosure();
console.log(basicClosureFn()); // Output: Basic Closure

// 2. Counter Closure Script
const counterClosure = (function() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getCounter: function() {
            return counter;
        }
    };
})();
counterClosure.increment();
counterClosure.increment();
console.log(counterClosure.getCounter()); // Output: 2

// 3. Unique ID Generator Script
const uniqueIdGenerator = (function() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    };
})();
console.log(uniqueIdGenerator()); // Output: 1
console.log(uniqueIdGenerator()); // Output: 2

// 4. Loop Closure Script
function createLoggingFunctions() {
    const funcs = [];
    for (let i = 0; i < 5; i++) {
        funcs.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }
    return funcs;
}
const logFuncs = createLoggingFunctions();
logFuncs[0](); // Output: 0
logFuncs[1](); // Output: 1
logFuncs[2](); // Output: 2

// 5. Memoization Script
function memoizeFunction(func) {
    const results = {};
    return function(...args) {
        const key = args.toString();
        if (!results[key]) {
            results[key] = func(...args);
        }
        return results[key];
    };
}
const memoizedFactorialFunc = memoizeFunction(factorial);
console.log(memoizedFactorialFunc(5)); // Output: 120
console.log(memoizedFactorialFunc(6)); // Output: 720
