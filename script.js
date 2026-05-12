// --- SECTION 1: BUSINESS LOGIC ---
function Task(description) {
    this.description = description;
    this.isDone = false; 
}

// 2. Blueprint for the List Manager
function ToDoList() {
    this.tasks = {};
    this.currentId = 0;
}

ToDoList.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

ToDoList.prototype.addTask = function (task) {
    task.id = this.assignId();
    this.tasks[task.id] = task;
};

ToDoList.prototype.deleteTask = function (id) {
    if (this.tasks[id] === undefined) {
        return false;
    }
    delete this.tasks[id];
    return true;
};

// --- SECTION 2: UI LOGIC ---

let myToDoList = new ToDoList();

function displayTasks(listToDisplay) {
    let listArea = $("#tasks-display");
    let htmlString = "";

    Object.keys(listToDisplay.tasks).forEach(function (id) {
        const task = listToDisplay.tasks[id];
        // If task.isDone is true, we add the 'done' class for the strikethrough
        let strikeClass = task.isDone ? "class='done'" : "";

        htmlString += "<li>" +
            "<span " + strikeClass + " id='text-" + task.id + "'>" + task.description + "</span>" +
            "<div>" +
            "<button class='done-btn' id=" + task.id + ">Done</button> " +
            "<button class='delete-btn' id=" + task.id + ">Remove</button>" +
            "</div>" +
            "</li>";
    });

    listArea.html(htmlString);
}

$(document).ready(function () {

    $("#new-task-form").submit(function (event) {
        event.preventDefault();
        let description = $("#new-task-desc").val();
        let newTask = new Task(description);
        myToDoList.addTask(newTask);
        displayTasks(myToDoList);
        $("#new-task-desc").val("");
    });

    // Marking a task as done (Toggles the line)
    $("#tasks-display").on("click", ".done-btn", function () {
        let id = this.id;
        myToDoList.tasks[id].isDone = !myToDoList.tasks[id].isDone; // Switch between true/false
        displayTasks(myToDoList);
    });

    // Removing a task
    $("#tasks-display").on("click", ".delete-btn", function () {
        myToDoList.deleteTask(this.id);
        displayTasks(myToDoList);
    });
});