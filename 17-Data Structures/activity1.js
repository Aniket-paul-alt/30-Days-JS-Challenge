//Activity 1 - Linked List
//Task 1

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

node1.next = node2
node2.next = node3

console.log(node1.value);
console.log(node1.next.value); //node1.next == node2
console.log(node1.next.next.value); //node1.next.next == node2.next == node3

//Task 2

class LinkedList{
    constructor(){
        this.head = null;
    }

    addToEnd(data){
        const newNode = new Node(data)
        if(this.head == null) this.head = newNode
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

    removeFromEnd(){
        if(this.head == null) console.log(`List is empty`);

        if(this.head.next == null) this.head = null

        let curr = this.head
        let prev = null
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        prev.next = null
    }

    display(){
        if(this.head == null) console.log(`List is empty`);

        let curr = this.head
        while(curr){
            console.log(curr.value);
            console.log(" |");
            console.log(" ^");
            curr = curr.next
        }
        console.log("null");
    }
}

const myList = new LinkedList()
myList.addToEnd(10)
myList.addToEnd(20)
myList.addToEnd(30)

myList.display()

myList.removeFromEnd()
myList.display()