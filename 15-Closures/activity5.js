//Activity 5 - Memoization
//Task 7

function memoize(originalFunction) {
    const cache = new Map(); // Use a Map to store cached results

    return function (...args) {
        const key = JSON.stringify(args); // Create a unique key based on function arguments

        if (cache.has(key)) {
            // If the result is already cached, return it
            console.log(`Using cached result for arguments: ${key}`);
            return cache.get(key);
        } else {
            // Otherwise, compute the result and cache it
            const result = originalFunction(...args);
            cache.set(key, result);
            console.log(`Computed result for arguments: ${key}`);
            return result;
        }
    };
}

// Example: A function to simulate an expensive computation
function expensiveComputation(a, b) {
    // Imagine some complex logic here
    return a + b;
}

// Create a memoized version of the expensive computation
const memoizedComputation = memoize(expensiveComputation);

// Calculate results (some results will be cached)
console.log(memoizedComputation(2, 3)); // Computed result for arguments: [2,3]. Result: 5
console.log(memoizedComputation(2, 3)); // Using cached result for arguments: [2,3]. Result: 5
console.log(memoizedComputation(4, 5)); // Computed result for arguments: [4,5]. Result: 9
console.log(memoizedComputation(2, 3)); // Using cached result for arguments: [2,3]. Result: 5

//Task 8

function memoizeFactorial(originalFunction) {
    const cache = new Map(); // Use a Map to store cached results

    return function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }

        if (cache.has(n)) {
            // If the result is already cached, return it
            console.log(`Using cached result for factorial(${n})`);
            return cache.get(n);
        } else {
            // Otherwise, compute the result and cache it
            const result = originalFunction(n);
            cache.set(n, result);
            console.log(`Computed result for factorial(${n})`);
            return result;
        }
    };
}

// Original factorial function
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }

    // You can replace this recursive implementation with an iterative one if desired.
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoizeFactorial(calculateFactorial);

// Calculate factorials (some results will be cached)
console.log(memoizedFactorial(5)); // Computed result for factorial(5). Result: 120
console.log(memoizedFactorial(3)); // Using cached result for factorial(3). Result: 6
console.log(memoizedFactorial(5)); // Using cached result for factorial(5). Result: 120
console.log(memoizedFactorial(4)); // Computed result for factorial(4). Result: 24
