//Activity 2 - Reverse Integer
//Task 2

function revInt(num) {
    
    const isNegative = num < 0;
    num = Math.abs(num); 

    let reversedString = '';
    while (num > 0) {
      const digit = num % 10;
      reversedString += digit;
    //   console.log(reversedString);
      
      num = Math.floor(num / 10);
    }
    let reversedNumber
    if(reversedString.startsWith('0')) reversedNumber = reversedString;
    else reversedNumber = parseInt(reversedString);
  
    return isNegative ? -reversedNumber : reversedNumber;
  }

console.log(revInt(123));
console.log(revInt(1200));
console.log(revInt(-124));
console.log(revInt(-12406));
