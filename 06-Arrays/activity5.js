//Activity 5 - Multi Dimensional Array
//Task 12
let arr2D = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr2D);
console.log(arr2D.length);

console.log("\n");

//Task 13
// for (let i = 0; i < arr2D.length; i++) {
//     for (let j = 0; j < arr2D.length; j++) {
//         console.log(arr2D[i][j]);
//     }
// }
// console.log(arr2D[1][1]);

arr2D.forEach(row => {
    // console.log(row);
    row.forEach(x=>{
        console.log(x);
    })
});