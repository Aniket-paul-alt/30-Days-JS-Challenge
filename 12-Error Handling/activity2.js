//Activity 2 - Finally Block
//Task 3
function fractionError(){
    try {
        let a = 10, b = 1
        if(b === 0){
            throw new Error("Oops!! cant divide coz denominator is zero") 
        }
        console.log(a/b);
    } catch (error) {
        console.error("Err : "+error);
    }finally{
        console.log("Operation ended");
    }
}

fractionError()

//finally block will always runs even the fucntion is giving error or not
//when operation is resolve try and finally will run
//when operation is rejected catch and finally will run