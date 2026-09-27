// class Node {
//     constructor(data){
//         this.data = data;
//         this.next=null;
//     }
// }

// let node1 = new Node(10)
// let node2 = new Node(20)
// let node3 = new Node(30)
// let node4 = new Node(40)

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// let head = node1;

// let current = head;

// while(current!== null){
//     console.log(current.data);
//     current = current.next;
// }


// class Node2 {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

//  n1 = new Node2(1)
//  n2 = new Node2(2)
//  n3 = new Node2(3)
//  n4 = new Node2(4)

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;

// let head = n1;
// let current = head;

// while(current!==null){
//     console.log(current.data);
//     current = current.next;

// }
class Nod {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create nodes
const t1 = new Nod(2);
const t2 = new Nod(5);
const t3 = new Nod(10);
const t4 = new Nod(15);
const t5 = new Nod(20);

// Connect nodes
t1.next = t2;
t2.next = t3;
t3.next = t4;
t4.next = t5;

// Head points to first node
let head1 = t1;

// Insert 1 at the beginning
const newnode = new Nod(1);

newnode.next = head1;
head1 = newnode;

// Insert 25 at the end
const lastnode = new Nod(25);

let current1 = head1;

while (current1.next !== null) {
    current1 = current1.next;
}

current1.next = lastnode;

// Traverse and print the final list
current1 = head1;

while (current1 !== null) {
    console.log(current1.data);
    current1 = current1.next;
}