//Activity 5 - Loop Control Statements
//Task 8
for (let index = 0; index <= 10; index++) {
    if( index == 5) {
        // console.log(index+" is skipped");
        continue
    }
    else console.log(index);
    
}

//Task 9
let n = 1
while (n<11) {
    if( n == 7) break;
    else console.log(n);
    n++
}