//Activity 5 - Combining Conditions
//Task 7
let year = 1952

if((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) console.log(`${year} is leap year`);
else console.log(`${year} is not leap year`);