"use strict";

var promise = new Promise(function (resolve, reject) {
  resolve(1);
});
promise.then(function (val) {
  console.log(val); // 1

  return val + 2;
}).then(function (val) {
  console.log(val); // 3
});