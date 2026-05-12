// --- SECTION 1: BUSINESS LOGIC ---
function Task(description) {
    this.description = description;
    this.isDone = false;
}

function ToDoList() {
    this.tasks = {};
    this.currentId = 0;
}