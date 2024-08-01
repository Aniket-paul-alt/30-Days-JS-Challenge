//Activity 2 - Searching Algo
//Task 4

function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i; // Found the element at index i
        }
    }
    return -1; // Element not found
}

// Example usage:
const myArray = [10, 5, 8, 3, 7];
const targetValue = 8;
const result = linearSearch(myArray, targetValue);

if (result !== -1) {
    console.log(`Found ${targetValue} at index ${result}.`);
} else {
    console.log(`${targetValue} not found in the array.`);
}

//Task 5

function binarySearch(arr,key){
    let low = 0, high = arr.length-1
    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] == key) return mid
        else if(arr[mid] < key) low = mid + 1
        else high = mid - 1
    }
    return -1
}

const array = [10,50,55,65,70,100], target = 100
const binaryResult = binarySearch(array,target)


if(binaryResult !== -1) console.log(`Found ${target} at index ${binaryResult}.`);
else console.log(`${target} not found`);