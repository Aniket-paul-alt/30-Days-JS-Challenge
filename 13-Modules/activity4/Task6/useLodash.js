const lodash = require('lodash')

// console.log(lodash);

//1
const arr = lodash.xor([1,2,3])
console.log(arr);

//2
console.log(lodash.upperCase("tukai"))

//3
const sum = lodash.attempt(function(){
    return 20+10
})

console.log(sum);

//4
const num = lodash.clamp(10,8,5)
console.log(num);

//5
console.log(lodash.invert({name: "aniket", age: 22}))

//6
const ans = lodash.flip((a,b,c,d)=>{
    return [a,b,c,d]
})

console.log(ans(1,2,3,4));
