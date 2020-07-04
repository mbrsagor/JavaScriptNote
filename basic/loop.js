var number = 0;

// while (number <= 10) {
//     console.log(number);
//     number += 2;
// }

// while (true) {
//     console.log(number);
//     if (10 == number) {
//         break;
//     };
//     number++;
// }


// do {
//     console.log("I am counting " + number);
//     number++;
// } while (number <= 10);


// for (var i = 0; i <= 10; i+=2) {
//     console.log(i);
// }


// var i, j;
// for (i = 0, j = 10; i <= 10; i++ , j--) {
//     console.log(i, j);
// }

var n = 4;
var factorial = 1;

// for (var i = n; i > 1; i--) {
//     factorial *= i;
// }
// console.log(factorial);


for (var i = 0; i <= 10; i++) {
    factorial += i;
    console.log("Factorial of", i, "is", factorial);
}
