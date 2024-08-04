//Activity 3 - Palindrome Number
//Task 3

function palindrome(num){
    let copy = num
    
    const isNegative = num < 0;
    num = Math.abs(num);

    let rev = ''
    while(num !== 0){
        let rem = num % 10

        rev += rem

        num = Math.floor(num/10)
    }

    // if(isNegative){
    //     if(copy == -rev) return true
    //     else false
    // }else{
    //     if(copy == rev) return true
    //     else return false
    // }

    return isNegative ? (copy == -rev) : (copy == rev)
}

console.log(palindrome(121));
console.log(palindrome(123));
console.log(palindrome(-123));
console.log(palindrome(-121));
