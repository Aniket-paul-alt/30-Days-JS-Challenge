//Activity 2 - Class Inheritance
//Task 3
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greeting(){
        return `Hi, My names is ${this.name}, I am ${this.age}`
    }
  }
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return this.studentId;
    }
    //overriden method
    greeting(){
        return `Hi, My names is ${this.name}, my id is ${this.studentId}`
    }
  }
  
  // Create an instance of Student
  const student1 = new Student('Aniket', 22, '008');
  
  // Log the student ID
  console.log(`${student1.name}'s student ID is ${student1.getStudentId()}.`);

  //Task 4
console.log(student1.greeting());
  