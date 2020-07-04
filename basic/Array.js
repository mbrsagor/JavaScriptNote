names = ["mbr-sagor", "zia-uddin", "saif-nirob", "russel-mahmud"];
names[names.length] = "hello-happened"; // Add data in array 
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
