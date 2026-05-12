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