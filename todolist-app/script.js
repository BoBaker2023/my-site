let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

addTaskButton.addEventListener("click", function () {
if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
}


    tasks.push({
        text: taskInput.value,
        completed: false
    });
    saveTasks();
    renderTasks();
    taskInput.value = "";
});



function renderTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i].text;
        

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        
        deleteButton.addEventListener("click", function () {
        tasks.splice(i,1);
        saveTasks();
        renderTasks();
});
        const completeButton = document.createElement("button");
        completeButton.textContent = tasks[i].completed ? "Undo" : "Complete";
        completeButton.classList.add("complete");
        
        completeButton.addEventListener("click", function () {
        tasks[i].completed = !tasks[i].completed;
        saveTasks();
        renderTasks();
});

if (tasks[i].completed) {
    li.classList.add("completed");
}

li.appendChild(completeButton);
li.appendChild(deleteButton);
taskList.appendChild(li);

}
    
    const remainingTasks = tasks.filter(task => !task.completed).length;

taskCounter.textContent = `Tasks Remaining: ${remainingTasks}`;
}

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage.getItem("tasks"));
}

renderTasks();