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
