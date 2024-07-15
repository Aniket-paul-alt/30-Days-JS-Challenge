//Activity 4 - Logical Operators
//Task 11
let conditionAnd1 = ((10 == 10) && (20>10)) // true && true = true
let conditionAnd2 = ((10 == 10) && (20<10)) // true && false = false
let conditionAnd3 = ((10 > 10) && (20>10)) // false && true = false
let conditionAnd4 = ((10 > 10) && (20<10)) // false && false = false

console.log(conditionAnd1);
console.log(conditionAnd2);
console.log(conditionAnd3);
console.log(conditionAnd4);

//Task 12
let conditionOr1 = ((10 == 10) || (20>10)) // true || true = true
let conditionOr2 = ((10 == 10) || (20<10)) // true || false = true
let conditionOr3 = ((10 > 10) || (20>10)) // false || true = true
let conditionOr4 = ((10 > 10) || (20<10)) // false || false = false

console.log(conditionOr1);
console.log(conditionOr2);
console.log(conditionOr3);
console.log(conditionOr4);

//Task 13
let negate1 = !( 1 > 2 ) // !false = true
let negate2 = !( 1 < 2 ) // !true = false

console.log(negate1);
console.log(negate2);