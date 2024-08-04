// Activity 1: Understanding LocalStorage

// Task 1: Save a string value to localStorage and retrieve it
localStorage.setItem('myString', 'Hello, LocalStorage!');
const retrievedString = localStorage.getItem('myString');
console.log('Retrieved String:', retrievedString);

// Task 2: Save an object to localStorage and retrieve it
const myObject = { name: 'John', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log('Retrieved Object:', retrievedObject);

// Activity 2: Using LocalStorage

// Task 3: Save form input to localStorage and display it
document.getElementById('localStorageForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.target.localName.value;
    const email = event.target.localEmail.value;
    const userData = { name, email };
    localStorage.setItem('userData', JSON.stringify(userData));
    displayLocalStorageData();
});

function displayLocalStorageData() {
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data) {
        document.getElementById('localStorageData').textContent = `Name: ${data.name}, Email: ${data.email}`;
    }
}

displayLocalStorageData();

// Task 4: Remove an item from localStorage
localStorage.removeItem('myString');
console.log('LocalStorage after removal:', localStorage);

// Activity 3: Understanding SessionStorage

// Task 5: Save a string value to sessionStorage and retrieve it
sessionStorage.setItem('mySessionString', 'Hello, SessionStorage!');
const retrievedSessionString = sessionStorage.getItem('mySessionString');
console.log('Retrieved Session String:', retrievedSessionString);

// Task 6: Save an object to sessionStorage and retrieve it
const mySessionObject = { name: 'Jane', age: 25 };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log('Retrieved Session Object:', retrievedSessionObject);

// Activity 4: Using SessionStorage

// Task 7: Save form input to sessionStorage and display it
document.getElementById('sessionStorageForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.target.sessionName.value;
    const email = event.target.sessionEmail.value;
    const userSessionData = { name, email };
    sessionStorage.setItem('userSessionData', JSON.stringify(userSessionData));
    displaySessionStorageData();
});

function displaySessionStorageData() {
    const data = JSON.parse(sessionStorage.getItem('userSessionData'));
    if (data) {
        document.getElementById('sessionStorageData').textContent = `Name: ${data.name}, Email: ${data.email}`;
    }
}

displaySessionStorageData();

// Task 8: Remove an item from sessionStorage
sessionStorage.removeItem('mySessionString');
console.log('SessionStorage after removal:', sessionStorage);

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Save value to both localStorage and sessionStorage, then retrieve and log
function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    const localValue = localStorage.getItem(key);
    const sessionValue = sessionStorage.getItem(key);
    console.log(`LocalStorage - ${key}:`, localValue);
    console.log(`SessionStorage - ${key}:`, sessionValue);
}

saveToBothStorages('sharedKey', 'Shared Value');

// Task 10: Clear all data from both localStorage and sessionStorage
function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log('LocalStorage after clearing:', localStorage);
    console.log('SessionStorage after clearing:', sessionStorage);
}

clearAllStorages();
