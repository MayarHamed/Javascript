alert("Welcome to your phonebook");
operation = null;
phonebook = [];

do {
    operation = prompt("choose operation you want to perform: add, search");

    if (operation == "add") { //adding contact to phone book
        let contact = {
            name: prompt("please enter contact name"),
            phone: prompt("please enter contact phone number")
        }
        phonebook.splice(0, 0, contact);
    }

    if (operation == "search") {
        searchBy = prompt("do you want to search using name or phone number?") 
        if (searchBy == "name") { //if user wants to lookup contact using name
            let key = prompt("please enter name to search with");
            var person = phonebook.find(function (item) {
                return item.name == key;

            })
            alert(`The phone number of ${key} is ${person.phone}`); //printing phone number of name entered
        }
        else {
            let key = prompt("please enter phone number to search with"); //if user wants to lookup contact using phone number
            var person = phonebook.find(function (item) {
                return item.phone == key;

            })
            alert(`The name of the contact with phone number ${key} is ${person.name}`); //printing name of entered phone number
        }
    }
} while (operation != null || operation.length <= 0); //giving user option to do another operation untill they click cancel