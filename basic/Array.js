names = ["mbr-sagor", "zia-uddin", "saif-nirob", "russel-mahmud"];
names[names.length] = "hello-happened"; // Add data/data in array 
names.push("Abdul-Goni"); // Add data in array using another way
console.log(names);
console.log('\n');
names.pop();
console.log(names);

// console.log(names.length)

console.log('\n====================');

var item1 = ["book", "pen", "something"];
var item2 = ["anything"];

var newItem = item1.pop();
item2.push(newItem);

console.log(item1, item2);


const numbers = [1, 2, 3, 4, 5] 
const index = numbers.indexOf(2);
// const added = [10, ...numbers]; // add new
const added = [
    ...numbers.slice(0, index),
    10, 40
]
console.log(added);

// Removing
const remove = numbers.filter(n => n !== 5);
console.log(remove);

// Updating
const update = numbers.map(n => n === 2 ? 20 : n);
console.log(update);


// Simple array iteate
let books = ['Python', 'JavaScript', 'Java', 'Swift', 'Dart'];
for (let book of books) {
    console.log(book);
}

console.log(books);

let currentMemeber = is_active => {
    return(is_active ? 'Active Member' : 'Deactive Member');
}
console.log(currentMemeber(true));

let age = 19;
let can_drive = age > 16 ? "yes" : "no";
console.log(can_drive);
