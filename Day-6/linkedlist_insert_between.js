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












// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// // Create the original nodes
// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(5);
// const node4 = new Node(10);
// const node5 = new Node(15);
// const node6 = new Node(20);

// // Connect the original list
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;

// let head = node1;

// // Create the new node
// const newNode = new Node(7);

// // Find the node containing 5
// let current = head;

// while (current !== null) {

//     if (current.data === 5) {

//         // Step 1: new node points to 10
//         newNode.next = current.next;

//         // Step 2: 5 points to new node
//         current.next = newNode;

//         break;
//     }

//     current = current.next;
// }

// // Print the list
// current = head;

// while (current !== null) {
//     console.log(current.data);
//     current = current.next;
// }

