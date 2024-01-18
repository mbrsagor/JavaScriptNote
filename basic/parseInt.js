/**
 * 
parseInt("10");
parseInt("10.00");
parseInt("10.33");
parseInt("34 45 66");
parseInt(" 60 ");
parseInt("40 years");
parseInt("He was 40");

 */

let a = "100"; 
  
console.log("Type of a before conversion: " + typeof a); 
console.log("Type of a after conversion: " + typeof parseInt(a));

let int1 = parseInt("1011", 2); 
let int2 = parseInt("234", 8); 
  
console.log('Integer value is: ' + int1); 
console.log("integer value is: " + int2); 
  
console.log(parseInt("sagsdfsf"));
