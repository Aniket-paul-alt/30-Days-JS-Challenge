//Activity 3 - custom error object
//Task 4
class CustomError extends Error {
    constructor(message) {
      super(message);
    }
  }
  
  function simulateCustomError() {
    try {
      // Throw an instance of our custom error
      throw new CustomError('Oops! Something went wrong in our custom function.');
    } catch (error) {
      if (error instanceof CustomError) {
        console.error('Custom error caught:', error.message);
      } else {
        // Handle other types of errors (if needed)
        console.error('Unknown error caught:', error.message);
      }
    }
  }
  
  // Call the function to see it in action
  simulateCustomError();

  //Task 5
  class CustomStrError extends Error{
    constructor(message){
        super(message)
    }
  }

  function validateStr(){
    try {
        let str = ""
        if(str === "") throw new CustomStrError('Something went wrong! string is empty')
        
        console.log(str);
    } catch (error) {
        if(error instanceof CustomStrError)
            console.error("Custom error caught : "+error.message);
        else console.error('Unknow error caught : '+error.message);
    }
  }

  validateStr()
  