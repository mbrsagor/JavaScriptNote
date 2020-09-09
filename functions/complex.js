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
