/*
kind of javascript data type:
1) String
2) Number
3) Boolean
4) Undefine
5) Null
6) object
*/

var name = "Md.Bozlur Rosid Sagor";
console.log(name);

let address = "Dhormopur sundorgonj, Gaibandha";
console.log(address);

let_var = () => {
    name = "mbr-sagor";
    address = "Dhaka Bangladesh";

    console.log(`My nickname is ${name}\nI live in ${address}`);
}

// let_var();

var num = 20;
let num2 = 30;

console.log(num);
console.log(num + num2);

sumNum = (n1, n2) => {
    console.log(`Total sum is: ${n1 + n2}`);
}

// sumNum(30, 70);

let is_active = true;
if (is_active === true) {
    console.log("I'm active user.");
} else if (is_active === false || is_active === true) {
    console.log("I'm not regular and active user.");
} else {
    console.log("I'm not active user yet.");
}

let username;
console.log(username);
username = "mbrsagor";
console.log(username);

myusername = () => {
    username = 'mbr-sagor-bd';
    console.log(username);
}

myusername();

email = null;
console.log(email);

email = "mbrsagor@gmail.com";
console.log(email);

var data = {
    "username": "sagor",
    "password": "p-123"
};
console.log(data);
