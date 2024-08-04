//Activity 4 - 3Sum
//task 4

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        let left = i + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
            result.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
            left++;
            right--;
          } else if (sum < 0) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  }
  
  
  let nums = [-1, 0, 1, 2, -1, -4];
  console.log(threeSum(nums));
  nums = [1,-9,2,-6,8,-3];
  console.log(threeSum(nums));
  