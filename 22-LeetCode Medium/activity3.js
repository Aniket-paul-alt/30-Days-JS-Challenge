//Activity 3 - Container with Most Water
//Task 3

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const hLeft = height[left];
        const hRight = height[right];
        const currentArea = Math.min(hLeft, hRight) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (hLeft < hRight) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

let wallHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`Maximum water area: ${maxArea(wallHeights)}`);
wallHeights = [5,6,8,3,4,1,2];
console.log(`Maximum water area: ${maxArea(wallHeights)}`);
