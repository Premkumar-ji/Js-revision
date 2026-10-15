class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let n1 = new node(21);
let n2 = new node("prem");
let n3 = new node("kumar");
let n4 = new node(1728);

n1.next = n2;
n2.next = n3;
n3.next = n4;

let head = n1;

let current = head;
 while(current!==null){
    if(current.next !== null && current.next.data === "kumar")
    {
        current.next = current.next.next;
        
    }
    console.log(current.data);
    current= current.next;
    
 }

 function deleteValue(head, target) {

    // 1. If the list is empty, return head
    if (head===null) {
        return head;
    }

    // 2. If the first node contains target
    if (head.data === target) {
        return head.next;
    }

    let current = head;

    // 3. Traverse while a next node exists
    while (current.next!==null) {

        // 4. Check whether the next node is the target
        if (current.next.data === target) {

            // 5. Skip the target node
            current.next = current.next.next;

            return head;
        }

        current = current.next;
    }

    // 6. Target wasn't found
    return head;
}