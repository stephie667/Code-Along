// BUSINESS LOGIC
// start with the name and pnone numbers
function Contact(first, last, phone){
    this.firstName= first;
    this.lastName= last;
    this.phoneNumber= phone;
}

function AdressBook() {
    this.contaccts = {};
    this.currentId = 0;
}

AdressBook.prototype.assignId = function() {
    this.currentId= this.currentId + 1;
    return this.currentId;
}

AdressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contact[contact.id]= contact;
}

// User Interface
let myAdressBook= new AdressBook();
function showContacts(book) {
    let listArea =$("#display-lists");
    let htmlString= "";

    Object.keys(book.contacts).forEach(function(id) {
        let person=book.contacts[id];
        htmlString += "<li>" + 
        person.firstName +" "+
        person.lastName + "-" +
        person.phoneNumber + "</li>";

    });
    listArea.html(htmlString);
}

$(document).ready(function() {
    $("#new-contact-form").submit(function(event)
{
    event.preventDefault();

    let first=$
    ("#fist-name").val();
    let last=$ ("#last-name").val();
    let phone=$ ("#phone-number").val();

    let newContact =new
    contact(first,last,phone);

myAdressBook.addContact(newContact);

    showContacts(myAdressBook);

    // clear inputs
    $("#first-name").val();
    $("#last-name").val("");
    $("#phone-nember").val("");
});
});
