document.addEventListener('DOMContentLoaded', () => {
    // Activity 1: Basic Event Handling
    // Task 1: Add a click event listener to a button that changes the text content of a paragraph.
    const TextBtn = document.getElementById('textChangeBtn');
    TextBtn.addEventListener('click', () => {
        document.getElementById('para').textContent = "Text Changed as yor Response"
    });

    // Task 2: Add a double-click event listener to an image that toggles its visibility.

    const dblClickImage = document.getElementById('dblClickImage')

    dblClickImage.addEventListener('dblclick', () => {
        if (dblClickImage.classList.contains('hidden')) {
            dblClickImage.classList.remove('hidden')
        }
        else {
            dblClickImage.classList.add('hidden')
        }
    });

    // Activity 2: Mouse Events
    // Task 3: Add a mouseover event listener to an element that changes its background color.

    const mouseoverElement = document.getElementById('mouseoverElement');

    mouseoverElement.addEventListener('mouseover', () => {
        mouseoverElement.style.backgroundColor = 'lightcoral';
    });

    // Task 4: Add a mouseout event listener to an element that resets its background color.

    mouseoverElement.addEventListener('mouseout', () => {
        mouseoverElement.style.backgroundColor = 'blue'
    });

    // Activity 3: Keyboard Events
    // Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

    const keydownInput = document.getElementById('keydownInput');

    keydownInput.addEventListener('keydown', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

    const keyupParagraph = document.getElementById('keyupParagraph');
    keydownInput.addEventListener('keyup', () => {
        keyupParagraph.textContent = `current value: ${keydownInput.value}`
    });

    // Activity 4: Form Events
    // Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

    const sampleForm = document.getElementById('sampleForm');

    sampleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(sampleForm);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });

    // Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

    const dropdown = document.getElementById('dropdown');
    const dropdownValue = document.getElementById('dropdownValue');

    dropdown.addEventListener('change', () => {
        dropdownValue.textContent = `Selected: ${dropdown.value}`
    });

    // Activity 5: Event Delegation
    // Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

    eventList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            console.log(`Clicked item: ${event.target.textContent}`);
        }
    });

    // Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
    const addItemButton = document.getElementById('addItemButton');

    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `List item ${eventList.children.length + 1}`;
        eventList.appendChild(newItem);
    });

    // Feature Requests
    // 1. Click Event Script: Add a click event listener to a button to change the text content of a paragraph.
    const clickFeatureButton = document.getElementById('clickButton');
    const clickFeatureParagraph = document.getElementById('clickParagraph');

    clickFeatureButton.addEventListener('click', () => {
        clickFeatureParagraph.textContent = 'Feature button was clicked!';
    });

    // 2. Mouse Events Script: Handle mouseover and mouseout events to change the background color of an element.
    const mouseFeatureElement = document.getElementById('mouseoverElement');

    mouseFeatureElement.addEventListener('mouseover', () => {
        mouseFeatureElement.style.backgroundColor = 'lightgreen';
    });

    mouseFeatureElement.addEventListener('mouseout', () => {
        mouseFeatureElement.style.backgroundColor = 'lightblue';
    });

    // 3. Keyboard Events Script: Log key presses and display input field values using keydown and keyup event listeners.
    const keydownFeatureInput = document.getElementById('keydownInput');
    const keyupFeatureParagraph = document.getElementById('keyupParagraph');

    keydownFeatureInput.addEventListener('keydown', (event) => {
        console.log(`Feature Key pressed: ${event.key}`);
    });

    keydownFeatureInput.addEventListener('keyup', () => {
        keyupFeatureParagraph.textContent = `Feature Current value: ${keydownFeatureInput.value}`;
    });

    // 4. Form Events Script: Handle form submission and change events on a select dropdown.
    const featureForm = document.getElementById('sampleForm');
    const featureDropdown = document.getElementById('dropdown');
    const featureDropdownValue = document.getElementById('dropdownValue');

    featureForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(featureForm);
        for (let [key, value] of formData.entries()) {
            console.log(`Feature ${key}: ${value}`);
        }
    });

    featureDropdown.addEventListener('change', () => {
        featureDropdownValue.textContent = `Feature Selected: ${featureDropdown.value}`;
    });

    // 5. Event Delegation Script: Demonstrate event delegation by handling events on dynamically added child elements.
    const featureEventList = document.getElementById('eventList');
    const featureAddItemButton = document.getElementById('addItemButton');

    featureEventList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            console.log(`Feature Clicked item: ${event.target.textContent}`);
        }
    });

    featureAddItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Feature List item ${featureEventList.children.length + 1}`;
        featureEventList.appendChild(newItem);
    });
});