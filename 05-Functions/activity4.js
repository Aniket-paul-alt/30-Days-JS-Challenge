//Activity 4 - Function Parameters and Default Values
//Task 7
let num1 = 10, num2 
const productTwo = (num1, num2 = 2)=>{
    return num1*num2
}
console.log(`Product is ${productTwo(num1,num2)}`);

//Task 8
let name = "Tukai", age = 12

function greet(name, age){
    if(age<=12) return `Hello ${name} little buddy age of ${age}`
    else return `Hello ${name} big brother age of ${age}`
}

console.log(greet(name,age));