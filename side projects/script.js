const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');


addButton.addEventListener('click', addTask);


function addTask() {
    const taskText = newTaskInput.value.trim();
    if (!taskText) return;


    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = '✅';
    completeButton.addEventListener('click', () => {
      li.classList.toggle('completed');
    });


    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);


    newTaskInput.value = '';
}