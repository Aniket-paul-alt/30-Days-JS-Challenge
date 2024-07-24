//Activity 5 - Concurrent Promises
//Task 8

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm the third promise")
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log(values);
});

//Task 9
const promises1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1st")
    }, 500);
  });
  
  const promises2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2nd")
    }, 100);
  });
  
  Promise.race([promises1, promises2])
  .then((value) => {
    console.log(value);
  });
  