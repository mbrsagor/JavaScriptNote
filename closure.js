const number = 3;
function myFunction() {

  const otherNumber = 1;
    function logger() {
    debugger
    console.log(otherNumber);
  }
  return logger();
}

const my_func = myFunction();
console.log(my_func);


// Example 2
function myCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
let counter = myCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// console.log(counter.count);
