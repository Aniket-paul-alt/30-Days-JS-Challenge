//Activity 3 - Closures in loops
//Task 5
function createLogFunction(index) {
    // Inner function (closure) that logs the index
    return function() {
        console.log(`Function at index ${index} was called.`);
    };
}

// Create an array to hold our functions
const functionArray = [];

// Generate and store 5 functions
for (let i = 0; i < 5; i++) {
    const logFunction = createLogFunction(i);
    functionArray.push(logFunction);
}

// Call each function and observe the logged indices
functionArray.forEach((fn) => fn());
