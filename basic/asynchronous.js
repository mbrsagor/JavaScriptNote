function myDisplayer(some) {
    // eslint-disable-next-line no-undef
    document.getElementById('demo').innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    const sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
// function myDisplayer(some) {
//     document.getElementById('demo').innerHTML = some;
// }

// function getFile(myCallback) {
//     const req = new XMLHttpRequest();
//     req.open('GET', 'mycar.html');
//     req.onload = function () {
//         if (req.status == 200) {
//             myCallback(this.responseText);
//         } else {
//             myCallback(`Error: ${req.status}`);
//         }
//     };
//     req.send();
// }

// getFile(myDisplayer);
