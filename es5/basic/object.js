// simple object example
var obj = ({
	name : "Bozlur Rosid Sagor",
	age : 24,
	contact : {
		email: "mbrsagor@gmail.com",
		phn : ['01773474709', '01773474709']
	} 
});

var list = [];

console.log(obj);
// console.log(obj.contact.email);
var myJSON = JSON.stringify(obj);
console.log(myJSON);
console.log('\n');

list.push(obj);
console.log(list);


