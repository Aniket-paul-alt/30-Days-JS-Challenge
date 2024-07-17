//Activity 5 - Higher Order functions
//Task 9
function outer(inner, num){
    for(let i = 1; i<=num; i++){
        console.log(`${i} -> `+inner(num));
    }
}

const inner = (times)=>{
    return `inner function called ${times} times` 
}

outer(inner, 2)

//Task 10
function main(first,second,val){
    return second(first(val))
}

const first = (val) => { return val * 10 }

const second = (val) => { return val * 20 }

const result = main(first,second,5)

console.log(result);
