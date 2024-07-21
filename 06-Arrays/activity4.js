//Activity 4 - Array Iteration
let array = [1,2,3,4,5]
console.log(`original array: `);
console.log(array);

//Task 10
for (const key in array) {
    console.log(`${key}th element ${array[key]}`);
}

console.log("\n");

for (let index = 0; index < array.length; index++) {
    console.log(`${index}th element ${array[index]}`);
}

console.log("\n");

//Task 11
array.forEach(x => {
    console.log(`${x-1}th element ${array[x-1]}`);
});

