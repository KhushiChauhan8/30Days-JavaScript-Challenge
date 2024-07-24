// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.

document.getElementById('heading').textContent = 'New Heading';

// Task 2: Select an HTML element by its class and change its background color.

document.querySelector('.bg-color').style.backgroundColor = 'yellow';

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.

const newDiv = document.createElement('div');
newDiv.textContent = 'This is the new div element';
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.

const newLi = document.createElement('li');

newLi.textContent = 'item4';document.getElementById('list').appendChild(newLi);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.

document.getElementById('removeMe').remove();

// Task 6: Remove the last child of a specific HTML element.

const parentDiv = document.getElementById('parent');
parentDiv.removeChild(parentDiv.lastElementChild);

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const img = document.getElementById('image');

img.src = 'new-img.png'

// Task 8: Add and remove a CSS class to/from an HTML element.

const paragraph = document.querySelector('.text');
paragraph.classList.add('highlight');
setTimeout(() => {
    paragraph.classList.remove('highlight');
}, 2000);

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

document.getElementById('changeTextBtn').
addEventListener('click', () => {
    document.getElementById('paragraph').textContent = 'Text has been changed!';
});

// Task 10: Add a mouseover event listener to an element that changes its border color.

document.getElementById('mouseoverTarget').
addEventListener('mouseover', () => {
    document.getElementById('mouseoverTarget').style.border = '2px solid black'
})


// Feature Requests
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
document.getElementById('heading').textContent = 'Updated Heading from Feature Request';

// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
const featureDiv = document.createElement('div');
featureDiv.textContent = 'New div from Feature Request';
document.body.appendChild(featureDiv);

// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
document.getElementById('removeMe').remove();

// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
document.getElementById('image').alt = 'Updated Alt Text from Feature Request';

// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('paragraph').textContent = 'Updated Text from Feature Request!';
});

document.getElementById('mouseoverTarget').addEventListener('mouseover', () => {
    document.getElementById('mouseoverTarget').style.border = '2px solid blue';
});

