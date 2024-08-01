//Activity 4 - Array Algo
//Task 8

function rotateArray(arr, k) {
    const n = arr.length;
    const rotations = k % n; // Handle cases where k > n

    // Reverse the entire array
    reverseArray(arr, 0, n - 1);
    // Reverse the first 'rotations' elements
    reverseArray(arr, 0, rotations - 1);
    // Reverse the remaining elements
    reverseArray(arr, rotations, n - 1);

    return arr;
}

function reverseArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const k = 2; // Rotate by 2 positions
const rotatedArray = rotateArray(myArray, k);
console.log(rotatedArray); // [4, 5, 1, 2, 3]


//Task 9

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from arr1 or arr2
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const mergedResult = mergeSortedArrays(arr1, arr2);
console.log(mergedResult); // [1, 2, 3, 4, 5, 6, 7, 8]
