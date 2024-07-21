//Activity 3 - Array Method (intermediate)
let array = [1,2,3,4,5]
console.log(`original array: `);
console.log(array);


//Task 7
let newArr = array.map(x => x*2)
console.log(`after map array: `);
console.log(newArr);

//Task 8
newArr = array.filter(x => {
    if(x%2 == 0) return x
})
console.log(`after filter array: `);
console.log(newArr);

//Task 9
newArr = array.reduce((x,n)=>{
    return x+=n
})
console.log(`after reduce array: `);
console.log(newArr);


