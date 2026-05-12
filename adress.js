// BUSINESS LOGIC
function AdressBook() {
    this.contaccts = {};
    this.currentId = 0;
}

AdressBook.prototype.assignId = function() {
    this.currentId= this.currentId + 1;
    
}