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
