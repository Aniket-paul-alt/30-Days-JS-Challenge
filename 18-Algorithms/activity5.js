//Activity 5 - Dynamic Programming
//Task 10

function fibonacci(n) {
    const fib = [0, 1]; // Initialize the first two Fibonacci numbers

    for (let i = 2; i <= n; i++) {
        // Compute the next Fibonacci number
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

// Example usage:
const n = 10; // Change this to any positive integer
const fibonacciNumbers = fibonacci(n);
console.log(`First ${n} Fibonacci numbers:`, fibonacciNumbers);


//Task 11
function knapsack(W, wt, val, n) {
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= W; w++) {
            if (wt[i - 1] <= w) {
                dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][W];
}

// Example usage:
const profits = [60, 100, 120];
const weights = [10, 20, 30];
const knapsackCapacity = 50;
const itemCount = profits.length;

const maxProfit = knapsack(knapsackCapacity, weights, profits, itemCount);
console.log(`Maximum value obtainable: ${maxProfit}`);
