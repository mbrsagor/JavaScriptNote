var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');

arr2.push(arr3);


console.log("array 1: lengh", arr1.length + "last=", arr1.slice(-1));
console.log("array 2: lengh", arr2.length + "last=", arr2.slice(-1));
