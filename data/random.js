// Multiple varialbe use
let a = b = c = 30
console.log(a);
console.log(b);
console.log(c);

console.log('\n');

// One Statement, Many Variables
let x = 10, y = 20, z = 30;
console.log(x);
console.log(y);
console.log(z);

// Undefined
let username;
console.log(username);
username = "mbr-sagor";
console.log(username);

// Null
let is_ative = null;
console.log(is_ative);
is_ative = true;
console.log(is_ative);

var $ = "username";
console.log($);


function calculate(num1, num2) {
    var result;
    return result = `Total add: ${num1 + num2} ${'\n'}Total sub: ${num1 - num2}${'\n'}Total mul: ${num1 * num2}${'\n'}Total div: ${num1 / num2}${'\n'}Total module: ${num1 % num2}`
}
cal = calculate(50, 30);
console.log(cal);

// undefine and null
let f_name = '', l_name;
if (f_name === l_name) {
    console.log(typeof (f_name));
    console.log("It's okay");
} else {
    console.log(typeof (l_name));
    console.log("It's not okay man!");
}

// Local date time
let date = Date();
console.log(date);

let text = "Hello there, I'm full-stack software developer with more then 2 year solid...";
console.log(`Length of text: ${text.length}`);

// Object
let employee = {
    first_name: "mbr",
    last_name: "sagor",
    full_name: "Bozlur Rosid Sagor",
    email: "sagor@gamil.com"
}
// display all
console.log(employee);
// change/update 1st name
employee.first_name = "Mr.";
console.log(employee);
