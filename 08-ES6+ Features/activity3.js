//Activity 3 - Spread and Rest Operators
//Task 5
let arr = [5,7,6,3,4,1]

let newArr = [...arr, 0,2,8,9]

console.log(newArr);

//Task 6

function sum(...args){
    let total = 0;
    for (const i of args) {
        total += i
    }
    console.log(total);
}

sum(1,2,3,4,5,6,7,8,9)
sum(90)
sum(90,10,100,-50,30)