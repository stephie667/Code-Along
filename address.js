//  BUSINESS LOGIC
//  start with the name and pnone numbers
function Contact(first, last, phone){
     this.firstName= first;
     this.lastName= last;
     this.phoneNumber= phone;
};
  function addressBook() {
    this.contaccts = {};
    this.currentId = 0;
};

AddressBook.prototype.assignId = function() {
    this.currentId= this.currentId + 1;
    return this.currentId;
};

 AdressBook.prototype.addContact = function(contact) {
     contact.id = this.assignId();
     this.contact[contact.id]= contact;
};
AddressBook.prototype.deleteContact = function (id) {
    if (this.contacts[id] === undefined) {
        return false;
    }
    delete this.contacts[id];
    return true;
};

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
};

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

// Listener for the delete button
$("#display-list").on("click", ".delete-btn", function () {
    myAddressBook.deleteContact(this.id);
    showContacts(myAddressBook);
});
});






