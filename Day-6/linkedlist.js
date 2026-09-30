
class Node {
    constructor(data){
        this.data = data;
        this.next=null;
    }
}

let node1 = new Node(10)
let node2 = new Node(20)
let node3 = new Node(30)
let node4 = new Node(40)

node1.next = node2;
node2.next = node3;
node3.next = node4;

while(current!== null){
    console.log(current.data);
    current = current.next;
}


class Node2 {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

 n1 = new Node2(1)
 n2 = new Node2(2)
 n3 = new Node2(3)
 n4 = new Node2(4)

n1.next = n2;
n2.next = n3;
n3.next = n4;


class nod{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

