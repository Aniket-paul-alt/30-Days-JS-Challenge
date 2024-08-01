//Activity 1 - Sorting Algo
//Task 1

let arr = [10,5,12,6,20,11]

for (let i = 0; i < arr.length-1; i++){
    for(let j = i+1; j< arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log("Bubble Sort : "+arr);

//Task 2

let inputArr = [2,1,5,7,3,11]
const n = inputArr.length;

for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
        if (inputArr[j] < inputArr[min]) {
            min = j;
        }
    }
    if (min !== i) {
        // Swapping the elements
        const tmp = inputArr[i];
        inputArr[i] = inputArr[min];
        inputArr[min] = tmp;
    }
}

console.log("Selection Sort: "+inputArr);

//Task 3

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr; // Base case: already sorted or empty array
    }

    const pivot = arr[0]; // Choose the first element as the pivot
    const leftArr = [];
    const rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    // Recursively sort the left and right subarrays
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// Example usage:
const unsortedArray = [5, 2, 4, 6, 1, 3];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); 