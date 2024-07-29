//Activity 1 - Understanding Closures
//Task 1

function outer() {
    let num = 10
    return function inner() {
        console.log(num);
    }
}

let result = outer()
result() // calling inner function

// // console.log(result);
//  let res = inner()
//  res()

//Task 2

function createCounter() {
    let count = 0; // Private counter variable

    // Increment the counter
    function increment() {
        count++;
    }

    // Get the current counter value
    function getValue() {
        return count;
    }

    // Return an object with the increment and getValue functions
    return {
        increment,
        getValue,
    };
}

// Create an instance of the counter
const myCounter = createCounter();

// Increment the counter a few times
myCounter.increment();
myCounter.increment();
myCounter.increment();

// Get the current counter value
console.log("Current counter value:", myCounter.getValue()); 
