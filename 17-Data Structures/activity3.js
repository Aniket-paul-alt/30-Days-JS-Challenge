//Activity 3 - Queue
//Task 5

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(data){
        this.items.push(data)
    }

    dequeue(){
        if(this.items == null){
            console.log(`Queue is empty`);
            return null
        }

        return this.items.shift()
    }

    front(){
        if(this.items == null){
            console.log(`Queue is empty`);
            return null
        }

        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const myQueue = new Queue()

myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)

console.log("Front ele : "+myQueue.front());

console.log("removed : "+myQueue.dequeue());
console.log("Front ele : "+myQueue.front());


//Task 6

const printerQueue = new Queue();

// Add print jobs to the queue
printerQueue.enqueue("Document A");
printerQueue.enqueue("Presentation B");
printerQueue.enqueue("Report C");

// Process print jobs in order
while (!printerQueue.isEmpty()) {
    const job = printerQueue.dequeue();
    console.log(`Printing: ${job}`);
}

// Queue is now empty
console.log("All print jobs processed!");