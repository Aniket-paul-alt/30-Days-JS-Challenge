//Activity 4 - The 'this' keyword
//Task 7
let book = {
    title : "DSA",
    author : "Reema",
    year : 2018,
    method1 : function call(){
        console.log(`The ${this.title} book is written by author ${this.author}`);
    }
}

book.method1()