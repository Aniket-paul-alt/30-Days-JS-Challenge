//Activity 2 - Practical Closures
//Task 3
function createUniqueIdGenerator() {
    let lastId = 0; // Initialize the last generated ID

    // Inner function (closure) to generate the next unique ID
    function generateUniqueId() {
        lastId++;
        return lastId;
    }

    // Return the inner function
    return generateUniqueId
}

// Create an instance of the ID generator
const getNextId = createUniqueIdGenerator();

// Generate some unique IDs
console.log(getNextId()); // 1
console.log(getNextId()); // 2
console.log(getNextId()); // 3
console.log(getNextId()); // 4


//Task 4

function createGreet(username){
//outer function captures user's name

    //inner function to greet the user
    return function greet(){
        console.log(`Hello, ${username} welcome`);
    }

}

const greetUser = createGreet("Aniket")
greetUser()


