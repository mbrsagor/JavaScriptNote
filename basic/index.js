var name = "mbr sagor";

console.log("Hello " + name);

let firstName = 'mbr';
let lastName = "sagor"
console.log("First Name: " + firstName + "\n" + "Last Name: " + lastName);


let currentPrice = 0.5;
currentPrice = 2;
console.log(currentPrice);



// primitive types
let fullName = 'Md.Bozlur Rosid Sagor'; // String
let age = 24; // Number/Integer
let isSave = true // Boolean
let isApprove = false // Boolean
let getName = undefined // UnDefine
let address = null // null

types = typeof fullName
console.log(types)

// Referance types
// object, array, function

// object
let man = {
    manName: 'mbr sagor',
    manAge: 24
}
console.log(man);
console.log(man.manName);
man.manName = 'Md.Bozlur Rosid Sagor'; // Here change the name value
console.log(man.manName);


// Array
let employee = ['sagor', 'zia', 'saif', 'russel']
console.log(employee);
console.log(employee[0]); // index
employee[4] = 'someone'; // add value in the array
employee[5] = 232; // add value in the array
employee[6] = false; // add value in the array
employee[7] = { house: 23, road: 11 }; // add object in the array
console.log(employee);
console.log(employee.length); // array size
// add array
let newArray = ["Hello there"]
addArray = employee.push(newArray);
console.log(employee);

for (var i = 0; i < employee.length; i++) {
    console.log(employee[i]);
}

// function
function getUserName(username) {
    console.log("My username is: " + username);
};
getUserName("sagor");
getUserName("admin");
getUserName("hello");


function calculationNumber(firstNumber, lastNumber) {
    console.log(firstNumber + lastNumber);
};
calculationNumber(20, 30);
calculationNumber(200, 100);
