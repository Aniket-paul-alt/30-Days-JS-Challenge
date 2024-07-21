//Activity 5 - Object Iteration
//Task 8
let book = {
    title : "DSA",
    author : "Reema",
    year : 2018
}

for (const props in book) {
    console.log(`The property ${props} and its value is ${book[props]}`);
}

console.log("\n");

//Task 9
console.log(`The properties are ${Object.keys(book)} and their respective values are ${Object.values(book)}`);