//Activity 1 - Basic Error Handling by try-catch
//Task 1
function simulateError(){
    try {
        throw new Error("Something went wrong!")
    } catch (error) {
        console.error("Err : "+error);
    }
}

simulateError()

//Task 2

function fractionError(){
    try {
        let a = 10, b = 0
        if(b === 0){
            throw new Error("Oops!! cant divide coz denominator is zero") 
        }
        console.log(a/b);
    } catch (error) {
        console.error("Err : "+error);
    }
}

fractionError()

