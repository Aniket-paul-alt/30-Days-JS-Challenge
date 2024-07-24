//Activity 1 - Understanding Promises
//Task 1 & Task 2
const myPromise = new Promise((res,rej)=>{
    let resolved = false;
    if(resolved){
        setTimeout(() => {
            res("hey i am resolved promise");
        }, 2000);
    }else{
        setTimeout(() => {
            rej("hey i am rejected");
        }, 2000);
    }
})

myPromise
.then((value)=> console.log(value))
.catch((value)=> console.log(value))