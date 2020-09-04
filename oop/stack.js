class Stack {
    constructor() {
        this.items = []
    }

    // Add new data in stack
    addItem = (element) => {
        this.items.push(element);
    }

    // Remove item from stack
    removeItem = () => {
        return this.items.pop();
    }

    // Print all item
    printItem = () => {
        for (let item = 0; item < this.items.length; item++) {
            const element = this.items[item];
            console.log(element);
        }
    }

    // Size of item
    itemSize = () => {
        console.log(`Item size of: ${this.items.length}`);
    }

    isEmpty = () => {
        if (this.items.length === 0) {
            console.log(`Sorry! there area no item in the array.`)
        }
    }

}

my_stack = new Stack();
my_stack.addItem("Apple");
my_stack.addItem("MacBook");
my_stack.addItem("MacBook-Air");
my_stack.addItem("MacBook-Pro");

my_stack.printItem();
my_stack.itemSize();
console.log("\n");
// Remove item function call
my_stack.removeItem();
my_stack.printItem();
