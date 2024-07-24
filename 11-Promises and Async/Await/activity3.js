//Activity 3 - Using Async/Await
//Task 4 & Task 5
async function myPromise (){
    return new Promise((res,rej)=>{
        let resolved = false;
        if(resolved){
            setTimeout(() => {
                res("resolved")
            }, 2000);
        }else{
            setTimeout(() => {
                rej("rejected")
            }, 2000);
        }
    })
}

async function fetchAndLog(){
    try {
        const data = await myPromise()
        console.log(data);
    } catch (error) {
        console.log("Error : "+error);
    }
}

fetchAndLog()

