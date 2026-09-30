class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(5);
const n4 = new Node(795);
const n5 = new Node(567);
const n6 = new Node(567);
const n7 = new Node(5647);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

let head = n1;

// Delete the first node
let current = head;
while(current!= null){
    if(current.next.data === 5){
        current.next = current.next.next;
    break;
}
current = current.next;
}
// WRITE YOUR CODE HERE

current = head;
// Print the list

while (current !== null) {
    console.log(current.data);
    current = current.next;
}







