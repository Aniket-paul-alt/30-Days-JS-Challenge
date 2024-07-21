//Activity 2 - Object Methods
//Task 3 & 4
let book = {
    title : "DSA",
    author : "Reema",
    year : 2018,
    method1 : function call(){
        return `The ${book.title} book is written by author ${book.author}`
    },
    method2 : updateYear = year =>{
        book.year = year
    }
}
// console.log(book.year);
//Task 3
console.log(book.method1());

//Task 4 
book.method2(2020)
console.log(book.year);