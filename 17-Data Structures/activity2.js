//Activity 2 - Stack
//Task 3

class Stack{
    constructor(){
        this.items = []
    }

    push(data){
        this.items.push(data)
    }

    pop(){
        if(this.items == null) {
            console.log(`Stack is empty`);
            return null
        }

        return this.items.pop()
    }

    peek(){
        if(this.items == null) {
            console.log(`Stack is empty`);
            return null
        }

        return this.items[this.items.length-1]
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const myStack = new Stack()

myStack.push(10)
myStack.push(20)
myStack.push(30)

console.log("Peeked : "+myStack.peek())

myStack.push(40)
console.log("Peeked : "+myStack.peek())

console.log("Popped : "+myStack.pop())

//Task 4

function reverseString(input) {
    const stack = new Stack();
    for (const char of input) {
        stack.push(char);
    }

    let reversed = "";
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    return reversed;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);