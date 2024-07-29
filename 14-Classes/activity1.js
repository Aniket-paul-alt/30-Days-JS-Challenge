//Activity 1 - Class Definition
//Task 1

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greeting(){
        return `Hi, My names is ${this.name}, I am ${this.age}`
    }

    updateAge(newAge){
        this.age = newAge
        console.log(`${this.name}'s age has been updated to ${this.age} years.`);
    }
}

const user1 = new Person("Aniket", 22)
console.log(user1.greeting());

//Task 2
user1.updateAge(25)



