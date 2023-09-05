
function addTask() {
    var taskValue = document.getElementById('new-task').value;
    if (taskValue === '') return;  // Check for empty input

    var taskList = document.getElementById('task-list');
    
    var taskItem = document.createElement('li');
    taskItem.textContent = taskValue;
    taskList.appendChild(taskItem);

    // Clear the input for new tasks
    document.getElementById('new-task').value = '';

    // Add event listener for removing task on click
    taskItem.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
}
