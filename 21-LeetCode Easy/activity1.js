//Activity 1 - Two Sum
//Task 1

function twoSum(arr, target){
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == target){
                console.log(i,j);
            }
        }
    }
}
twoSum([5,6,2,3,7], 11)
twoSum([5,6,2,3,7], 5)
twoSum([5,6,2,3,7], 10)
twoSum([5,6,2,3,7], 9)
