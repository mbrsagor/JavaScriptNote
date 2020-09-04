class Stack {
    constructor() {
        this.items = []
    }

    // Add new data in stack
    addItem = (element) => {
        this.items.push(element);
    }

    // Print all item
    printItem = () => {
        for (let item = 0; item < this.items.length; item++) {
            const element = this.items[item];
            console.log(element);
        }
    }

}

my_stack = new Stack();
my_stack.addItem("Apple");
my_stack.addItem("MacBook");
my_stack.addItem("MacBook-Air");
my_stack.addItem("MacBook-Pro");

my_stack.printItem();