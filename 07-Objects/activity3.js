//Activity 3 - Nested Objects
//Task 5
let library = {
    name : "Public Library",
    books : [
        {
            title : "DSA",
            author : "Reema",
            year : 2018
        },
        {
            title : "DBMS",
            author : "Ram",
            year : 2018
        },
        {
            title : "DAA",
            author : "Rahul",
            year : 2018
        },
    ]
}

console.log(library);

// Task 6
console.log(library.name);
library.books.forEach(x=>{
    console.log(x.title);
})