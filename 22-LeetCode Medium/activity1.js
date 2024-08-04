//Activity 1 - Add Two Numbers
//Task 

class ListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function addTwoNum(l1,l2){
    const dummy = new ListNode(-1)
    let curr = dummy

    let carry = 0
    while(l1 && l2){
        let sum = carry
        if(l1) {
            sum += l1.data
            l1 = l1.next
        }
        if(l2) {
            sum += l2.data
            l2 = l2.next
        }

        sum += carry
        carry = Math.floor(sum/10)
        let newNode = new ListNode(sum%10)
        curr.next = newNode
        curr = curr.next
    }
    return dummy.next
}



const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(9)
l2.next.next = new ListNode(2)

const newList = addTwoNum(l1,l2)

let curr = newList
while(curr){
    console.log(curr.data);
    curr = curr.next
}

