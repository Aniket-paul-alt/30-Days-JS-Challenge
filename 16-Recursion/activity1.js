//Activity 1 - Basic Recursion
//Task 1

function factorial(n){
    if(n == 1 || n == 0) return 1
    return n * factorial(n-1)
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));

//Task 2

function fibo(n){
    if(n<=1) return n
    
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(5));
console.log(fibo(2));
console.log(fibo(8));
console.log(fibo(10));