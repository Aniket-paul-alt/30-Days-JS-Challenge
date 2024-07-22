//Activity 5 - Enhanced Object Literals
//Task 8

function bookObj(title, author, year){
    return {
        title,
        author,
        year,
        tellTitleAuthor(){
            return `book title : ${title} and writer : ${author}`
        }
    }
}

console.log(bookObj("DSA", "Reema", "2018"));
console.log(bookObj("DBMS", "Rahul", 2015).tellTitleAuthor());

console.log("\n\n\n");


//Task 9

const objectify = (key,value) =>{
    return{
        [key] : value
    }
}

console.log(objectify("title", "DSA"));
console.log(objectify("1", "Real Madrid"));
console.log(objectify("club name", "Real Madrid"));





// const objectify2 = (...args) =>{
//     // console.log(args);
//     args.forEach(row => {
//         // console.log(row);
//         // console.log(row[0]);
//         console.log(row[0] +":"+ row[0]);
            
//         // row.forEach(x=>{
//         //     // console.log(x);
//         // })
//     });
// }

// let obj = {
//     "club" : "Real Mdrid",
//     "manager" : "Carlo Ancelotti",
//     "president" : "Florentino Perez"
// }

// objectify2(Object.keys(obj), Object.values(obj))

// console.log(objectify2(Object.keys(obj), Object.values(obj)));
