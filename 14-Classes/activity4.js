//Activity 4 - Getters and Setters
//Task 7
class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    // Setter for firstname
    set firstname(newFirstname) {
        this._firstname = newFirstname;
    }

    // Setter for lastname
    set lastname(newLastname) {
        this._lastname = newLastname;
    }

    // Getter for full name
    get fullname() {
        return `${this._firstname} ${this._lastname}`;
    }
}

// Create an instance of Person
const person = new Person("Aniket", "Paul");

//Task 7
console.log(`Full name: ${person.fullname}`);


//Task 8
// Update the name using the setters
person.firstname = "Paul";
person.lastname = "Tukai";

// Log the updated name
console.log(`Updated name: ${person.fullname}`);
