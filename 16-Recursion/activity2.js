//Activity 2 - Recursion with Arrays
//Task 3

function sumOfArr(arr, n){
    if(n <= 0) return 0

    return sumOfArr(arr,n-1) + arr[n-1]
}
let arr1 = [1,2,3,4,5,6]
console.log(sumOfArr(arr1,arr1.length));
let arr2 = [1,2,3,4,5]
console.log(sumOfArr(arr2,arr2.length));
let arr3 = [1,2,3,4]
console.log(sumOfArr(arr3,arr3.length));

//Task 4

function maxElement(arr,n){
    if(n==1) return arr[0]

    return Math.max(maxElement(arr,n-1), arr[n-1]) 
}

let arr4 = [1,2,3,4,5,6]
console.log(maxElement(arr4,arr4.length));
let arr5 = [10,2,33,24,15,6]
console.log(maxElement(arr5,arr5.length));