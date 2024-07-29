//Activity 3 - Static method and Properties
//task 5
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreeting() {
        return "Hello! Nice to meet you.";
    }
}

// Call the static method without creating an instance
console.log(Person.genericGreeting());

//Task 6
class Student {
    static totalStudents = 0; // Initialize the static property
  
    constructor(name, age, studentId) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
      Student.totalStudents++; // Increment the totalStudents count
    }
  
    static getTotalStudents() {
      return Student.totalStudents;
    }
  }
  
  // Create some student instances
  const student1 = new Student('Aniket', 20, '008');
  const student2 = new Student('Tukai', 22, '009');
  
  // Log the total number of students
  console.log(`Total students: ${Student.getTotalStudents()}`); 
  