var subject = ["CSE", "EEE", "CS", "MBBA", "BBA"];
subject.push("Math");
console.log(subject);
subject.pop();
console.log(subject);
subject.shift("Textile");
console.log(subject);
subject.unshift("Hello world");
console.log(subject);


var multi_dimensional = [["mbr-sagor", "russel-mahmud", "saif-nirob"], [201, 404, 500], ["python", "javascript", "java"]];

//console.log(multi_dimensional); 				// print all list of data
//console.log(multi_dimensional[0]); 			// print only 0 index array all data
//console.log(multi_dimensional[0][1]); 		// print only 0 index first index
//console.log(multi_dimensional[0][1]); 		// print only 0 index first index

console.log('\n');

var data = [1,2,3,4,5,6,7,8,9];
console.log(JSON.stringify(data));