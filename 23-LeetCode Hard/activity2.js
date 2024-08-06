//Activity 2 - Merge K sorted Lists
//Task 2

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].val <= this.heap[index].val) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left].val < this.heap[smallest].val) {
                smallest = left;
            }
            if (right < length && this.heap[right].val < this.heap[smallest].val) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    for (let list of lists) {
        if (list) minHeap.insert(list);
    }

    const dummy = new ListNode();
    let current = dummy;

    while (!minHeap.isEmpty()) {
        const minNode = minHeap.extractMin();
        current.next = minNode;
        current = current.next;
        if (minNode.next) minHeap.insert(minNode.next);
    }

    return dummy.next;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const mergedList = mergeKLists([list1, list2, list3]);
let current = mergedList;
while (current) {
    console.log(current.val);
    current = current.next;
}
