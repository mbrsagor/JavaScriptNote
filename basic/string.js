const text = 'I love React and Angular.JS';
console.log(text);

console.log(text.replace('React', 'React.JS'));

// Example 2
const str = 'JS will, JS will rock you!';
console.log(str);

const newStr = str.replace(/JS/g, 'JavaScript');
console.log(newStr);


var address = "Dhormopur, Sundorgonj, Gaibandha";
console.log(address);

let name = "Mbr-Sagor";
console.log(name);

const username = "Sagor";
console.log(username);

// let language ="Bozlur ";
// let middle_name = "Rosid ";
// let last_name ="Sagor";
// console.log(language, middle_name, last_name);

let [first_name, middle_name, last_name] = ["Bozlur", "Rosid", "Sagor"];
console.log(first_name, middle_name, last_name);

var page = window.open('/path/to/pdf');
console.log(page.print());


// String validation
var myString = "An /invalid &string;";
var charList = ['/', '\\', '&', ';']; // etc...

function sanitize(input, list) {
    for (char in list) {
        input = input.replace(char, '');
    }
    return input
}

let san = sanitize();
console.log(san);

let text2 = "How are you doing today?";
const myArray = text2.split(" ");
let word = myArray[1];
console.log(word);
