//Activity 2 - Nested If-Else Statement
//Task 3
let a = 1, b = 2, c = 0

if(a>c && b>c){
    if(a>b) console.log("largest " +a);
    else console.log("largest "+ b);
}else if(b>a && c>a){
    if(b>c) console.log("largest "+ b);
    else console.log("largest "+ c)
}else{
    if(a>c) console.log("largest "+ a)
    else console.log("largest "+ c)
}