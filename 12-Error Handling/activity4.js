//Activity 4 - Error Handling in Promises
//Task 6

const myPromise = new Promise((res,rej)=>{
    let chance = Math.random()
    if(chance > 0.5){
        res("Resolve coz :" + chance)
    }else{
        rej("Rejected coz :"+ chance)
    }
})

myPromise
.then((e)=> console.log(e))
.catch((e)=> console.log(e))


//Task 7

async function simulateRandomPromise() {
    try {
      // Simulate a random delay (e.g., fetching data from an API)
      await new Promise((resolve, reject) => {
          // Simulate random success or failure
          if (Math.random() < 0.5) {
            resolve('Data successfully fetched!');
          } else {
            reject(new Error('Oops! Something went wrong.'));
          }
      });
      console.log('Promise resolved successfully!');
    } catch (error) {
      console.error('Error caught:', error.message);
    }
  }
  
  // Call the async function
  simulateRandomPromise();
  