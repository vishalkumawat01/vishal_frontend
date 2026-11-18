
// Array to store tasks
let tasks = [];

let taskInput = document.getElementById("taskInput");

let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");

let remaining = document.getElementById("remaining");


// Function to add task
function addTask() {

    let text = taskInput.value.trim();

    // Ignore empty input
    if (text === "") {
        return;
    }

    // Create task object
    let task = {
        text: text,
        done: false
    };

    // Add object to array
    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}


// Function to display tasks
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.textContent = task.text;

        span.className = "task-text";

        // Toggle completed status
        if (task.done) {
            span.classList.add("completed");
        }

        span.onclick = function() {

            task.done = !task.done;

            displayTasks();
        };


        // Create Delete button
        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = function() {

            tasks.splice(index, 1);

            displayTasks();
        };


        // Add elements to list
        li.appendChild(span);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });


    // Count remaining tasks
    let count = tasks.filter(function(task) {
        return !task.done;
    }).length;


    // Show remaining tasks
    if (tasks.length === 0) {

        remaining.textContent = "No tasks yet. Add one above!";

    } else {

        remaining.textContent =
            count + " of " + tasks.length + " tasks remaining";

    }

}


// Add button click event
addBtn.addEventListener("click", addTask);


// Enter key event
taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Display tasks initially
displayTasks();
