//Activity 3 - Arrow Functions
//Task 5
let num1 = 10, num2 = 20

const sum = () =>{
    return num1+num2
}

console.log(`sum of ${num1} + ${num2} = `+sum());

//Task 6
let str = "Hello world", ch = "E"

const charExist = () =>{
    str1 = str.toLowerCase(str)
    ch1 = ch.toLowerCase(ch)
    return str1.includes(ch1)
}

if(charExist()) console.log(`'${ch}' exists in '${str}'`);
else console.log(`'${ch}' doesn't exists in '${str}'`);
