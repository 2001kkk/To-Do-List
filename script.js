function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      li.remove();
    };
    li.appendChild(deleteButton);
  
    taskInput.value = '';
}
  