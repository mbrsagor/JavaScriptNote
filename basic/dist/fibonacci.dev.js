"use strict";

/**
 * The fibonacci example look like same
 * 1 + 2 + 3 + 4 + 5
 */
fibonacci = function (_fibonacci) {
  function fibonacci(_x) {
    return _fibonacci.apply(this, arguments);
  }

  fibonacci.toString = function () {
    return _fibonacci.toString();
  };

  return fibonacci;
}(function (number) {
  if (number === 0 || number == 1) {
    return number;
  } else {
    return number + fibonacci(number - 1);
  }
});

console.log(fibonacci(5));