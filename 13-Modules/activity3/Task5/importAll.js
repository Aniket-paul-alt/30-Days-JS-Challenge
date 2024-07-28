const myObj = require('./multiExports')

console.log("name :"+myObj.name);
console.log("age :"+myObj.age);
console.log("intro :"+myObj.intro(myObj.name,myObj.age));