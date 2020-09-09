function aboutMe() {
    return "I'm a full-stack software developer";
}

let about = aboutMe
console.log(about());
console.log(aboutMe());


function greet(fmMessage) {
    console.log(fmMessage);
}
greet(aboutMe);
greet(aboutMe());

// Inner function
function saySomething() {
    return function () {
        return "HEllo world";
    }
}

let fn = saySomething();
let message = fn();
console.log(message);

// Higher order function
let numbers = [1, 2, 3, 4, 5]
let fnc= numbers.map(number => number * 2);
console.log(fnc);

setTimeout(() => console.log(`Hello, I'm set time out function...`), 1000);

// 
function myFunction(number, number2) {
    return number + number2;
}

let username = "Sagor";
let lower_username = username.toLowerCase();
let upper_username = username.toUpperCase();
console.log(lower_username);
console.log(upper_username);
