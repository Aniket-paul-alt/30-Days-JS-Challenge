//Activity 4 - Merge Sorted List
//Task 4

class LinkedList{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

function mergeLists(l1,l2){
    const dummy = new LinkedList(-1)
    let curr = dummy

    while(l1 && l2){
        if(l1.data<l2.data){
            curr.next = l1
            l1 = l1.next
        }else{
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    curr.next = l1 || l2

    return dummy.next
}

const l1 = new LinkedList(1)
l1.next = new LinkedList(3)
l1.next.next = new LinkedList(5)

const l2 = new LinkedList(2)
l2.next = new LinkedList(4)
l2.next.next = new LinkedList(6)

const mergedList = mergeLists(l1,l2)

let current = mergedList
while(current){
    console.log(current.data);
    current = current.next
}