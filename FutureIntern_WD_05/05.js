// Initialize an empty array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); // Trim to remove unnecessary spaces

  // Check if the input is empty, if so, don't add the task
  if (taskText === "") return;

  // Create a new task object with an id, text, completed status, and timestamp
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
    createdAt: new Date().toLocaleString() // Store the date and time the task was created
  };

  // Add the new task to the tasks array
  tasks.push(newTask);

  // Clear the input field after adding the task
  taskInput.value = "";

  // Call the renderTasks function to update the displayed task list
  renderTasks();
}

// Function to render the tasks
function renderTasks() {
  // Get references to the Pending Tasks and Completed Tasks lists
  const pendingList = document.getElementById("pendingTasks");
  const completedList = document.getElementById("completedTasks");

  // Clear the current task lists
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  // Iterate over the tasks array to display each task in the appropriate list
  tasks.forEach(task => {
    const taskElement = document.createElement("li"); // Create a new list item
    taskElement.innerText = `${task.text} (Added: ${task.createdAt})`; // Set the task text and creation time

    // Create a button to mark the task as complete or undo completion
    const completeButton = document.createElement("button");
    completeButton.innerText = task.completed ? "Undo" : "Complete";
    completeButton.onclick = () => toggleComplete(task.id); // Toggle the task's completion status when clicked

    // Create a button to delete the task
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteTask(task.id); // Delete the task when clicked

    // Append the buttons to the task element
    taskElement.appendChild(completeButton);
    taskElement.appendChild(deleteButton);

    // If the task is completed, add it to the Completed Tasks list, otherwise add it to the Pending Tasks list
    if (task.completed) {
      taskElement.classList.add("completed"); // Add a CSS class to style completed tasks
      completedList.appendChild(taskElement);
    } else {
      pendingList.appendChild(taskElement);
    }
  });
}

// Function to toggle the completion status of a task
function toggleComplete(taskId) {
  // Find the task in the tasks array by its id
  const task = tasks.find(t => t.id === taskId);
  task.completed = !task.completed; // Toggle the task's completed status

  // If the task is now completed, set the completion time, otherwise clear it
  task.completedAt = task.completed ? new Date().toLocaleString() : null;

  // Call the renderTasks function to update the displayed task list
  renderTasks();
}

// Function to delete a task
function deleteTask(taskId) {
  // Filter out the task with the matching id from the tasks array
  tasks = tasks.filter(t => t.id !== taskId);

  // Call the renderTasks function to update the displayed task list
  renderTasks();
}
