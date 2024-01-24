setTimeout(function () {
    console.log("This message is shown after 3 seconds");
}, 3000);

const title = "Hello, I'm learning callback function with sagor";
console.log(title);



let startTime = new Date(milliseconds),
timeoutLength = 60000;

let interval = setInterval("checkTimeout()",1000);
function checkTimeout() {
    let currentTime = new Date(millisecond);
    if (currentTime > startTime + timeoutLength) {
        clearInterval(interval);
        console.log ("Your current Session is over due to inactivity.");
    }
}
