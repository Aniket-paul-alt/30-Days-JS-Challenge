//Activity 1 - Function declaration

let num = 13

//Task 1
function evenOrOdd(){
    if(num % 2 == 0) console.log(`${num} is even`);
    else console.log(`${num} is odd`);
}

evenOrOdd()

//Task 2
function findSquare(){
    let sqr = Math.pow(num,2)
    return sqr
}

console.log(findSquare());