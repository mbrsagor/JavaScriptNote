class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkList{
    constructor() {
        this.head = null;
        this._length = 0;
    }

    dispaly = () => {
        let _val = this.head;
        while (_val) {
            console.log(_val.next);
            _val = _val.next;
        }
    }
}

link_list = new LinkList();
link_list.head = new Node('Sagor');
second = new Node("Ohi");
third = new Node("Limon");

link_list.head.next = second
second = third

link_list.dispaly();
