const { node } = require("prop-types");

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
    }

}

// Create node
let node1 = new Node(10);
let node2 = new Node(15);
let node3 = new Node(25);
let node4 = new Node(35);
let node5 = new Node(45);
let node6 = new Node(50);

// Connect nodes
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

const link_list = new LinkList();
link_list.insertHead(77);
link_list.insertHead(88);
link_list.insertHead(99);

