// --- SECTION 1: BUSINESS LOGIC ---
function Task(description) {
    this.description = description;
    this.isDone = false;
}

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
        // If task.isDone is true, we add the 'done' 
        let strikeClass = task.isDone ? "class='done'" : "";

        htmlString += "<li>" +
            "<span " + strikeClass + " id='text-" + task.id + "'>" + task.description + "</span>" +
            "<div>" +
            "<button class='done-btn' id=" + task.id + ">Done</button> " +
            "<button class='delete-btn' id=" + task.id + ">Remove</button>" +
            "</div>" +
            "</li>";
    });