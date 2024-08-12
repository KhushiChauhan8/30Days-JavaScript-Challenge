document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input').value;
    if (taskInput) {
        addTask(taskInput);
        document.getElementById('task-input').value = ''; // Clear input after adding
    }
});

function addTask(taskDescription) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
        <span class="task-text">${taskDescription}</span>
        <button class="edit-task" onclick="editTask(this)">Edit</button>
        <button class="delete-task" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('.task-text').textContent;

    const editTaskDetails = document.getElementById('edit-task-details');
    editTaskDetails.innerHTML = `
        <input type="text" id="edit-task-input" value="${taskText}">
        <button id="save-task-button">Save</button>
    `;

    const modal = document.getElementById('task-modal');
    modal.style.display = 'block';

    document.getElementById('save-task-button').onclick = function () {
        const newTaskText = document.getElementById('edit-task-input').value;
        if (newTaskText) {
            taskItem.querySelector('.task-text').textContent = newTaskText;
            modal.style.display = 'none';
        }
    };

    document.querySelector('.close').onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
