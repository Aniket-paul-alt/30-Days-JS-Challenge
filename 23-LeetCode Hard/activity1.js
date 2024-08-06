//Activity 1 - Median of two sorted arrays
//Task 1

function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const midX = Math.floor((low + high) / 2);
        const midY = Math.floor((m + n + 1) / 2) - midX;

        const maxX = midX === 0 ? Number.NEGATIVE_INFINITY : nums1[midX - 1];
        const maxY = midY === 0 ? Number.NEGATIVE_INFINITY : nums2[midY - 1];

        const minX = midX === m ? Number.POSITIVE_INFINITY : nums1[midX];
        const minY = midY === n ? Number.POSITIVE_INFINITY : nums2[midY];

        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = midX - 1;
        } else {
            low = midX + 1;
        }
    }
}


let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); 
nums1 = [1,3,5,6,8];
nums2 = [2,4,8,10];
console.log(findMedianSortedArrays(nums1, nums2)); 
