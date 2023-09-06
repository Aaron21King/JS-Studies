const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = [];
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; 

    const task = {
        text: taskText,
        completed: false,
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = ''; 
}
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span>${task.text}</span>
            <button onclick="editTask(${index})">Editar</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function editTask(index) {
    const updatedText = prompt('Editar tarea:', tasks[index].text);
    if (updatedText !== null) {
        tasks[index].text = updatedText;
        renderTasks();
    }
}
function deleteTask(index) {
    const confirmDelete = confirm('¿Seguro que deseas eliminar esta tarea?');
    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTasks();
    }
}
addTaskButton.addEventListener('click', addTask);

renderTasks();