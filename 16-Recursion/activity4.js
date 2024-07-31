//Activity 4 - Recursive Search
//Task 7

function binarySearch(arr, low, high, k) {
    if(low > high) return -1
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] == k) return mid
    else if (arr[mid] > k) return binarySearch(arr, low, mid - 1, k)
    else return binarySearch(arr, mid + 1, high, k)
}

let arr = [10, 15, 18, 20,25], k = 20
console.log(binarySearch(arr, 0, arr.length - 1, k));

//Task 8
// Function to find the first occurrence of an element in a sorted array
function firstOcc(arr, l, h, x) {
    if (h >= l) {
        let mid = Math.floor((l + h) / 2);

        // Check if the element is present at the middle or
        // if the element is present in the left half (if
        // the element is greater than the middle element)
        if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x) {
            return mid;
        } else if (x > arr[mid]) {

            // Search in the right half
            return firstOcc(arr, mid + 1, h, x);
        } else {

            // Search in the left half
            return firstOcc(arr, l, mid - 1, x);
        }
    }
    return -1;
}

// Function to find the last occurrence of an element in a sorted array
function lastOcc(arr, n, l, h, x) {
    if (h >= l) {
        let mid = Math.floor((l + h) / 2);

        // Check if the element is present at the middle or
        // if the element is present in the right half (if
        // the element is smaller than the middle element)
        if ((mid == n - 1 || x < arr[mid + 1]) && arr[mid] == x) {
            return mid;
        } else if (x < arr[mid]) {

            // Search in the left half
            return lastOcc(arr, n, l, mid - 1, x);
        } else {

            // Search in the right half
            return lastOcc(arr, n, mid + 1, h, x);
        }
    }
    return -1;
}

// Function to count the occurrences of an element in a sorted array
function countOccurrences(arr, n, x) {
    // Find the first and last occurrences of the element
    let idxFirst = firstOcc(arr, 0, n - 1, x);

    // If the element does not exist, return -1
    if (idxFirst == -1) {
        return -1;
    }
    let idxLast = lastOcc(arr, n, idxFirst, n - 1, x);

    // Return the difference between the last and first
    // occurrences + 1 to get the total count
    return idxLast - idxFirst + 1;
}

// Main function
function main() {
    let arr = [1, 1, 2, 2, 2, 2, 3];
    let n = arr.length;
    let x = 2;

    let occurrences = countOccurrences(arr, n, x);

    console.log("Number of occurrences of " + x + ": " + occurrences);
}

// Call the main function
main();
