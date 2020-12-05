var n = 7;
if (n > 10) {
  console.log("This number 10 is smaller then " + n);
} else {
  console.log(n + " is greather then this number");
}


/*
var n = 22;
var m = 22;
if (m > n) {
    console.log(m+ " is getter then "+n);
} else if (m==n) {
    console.log(n + " is equal to " + m);
} else {
    console.log(n+" is smaller then "+m);
}
*/


/*
n = 8;
if (8 = n) {
    console.log("n is equal to");
} else {
    console.log("this condition false");
}
*/


/*
var personOne = "sagor";
var personTwo = "sowrov";
var theyAreBrother = true;
if ('sagor' == personOne && 'sowrov' == personTwo && theyAreBrother) {
    console.log("sagor & sowrov they are brother");
} else {
    console.log("They are n't brother");
}
*/

n = 4;
if (n <= 10) {
  if (n == 2 || n == 3 || n == 5 || n == 7) {
    console.log(
      "This number " + n + " is smaller then 12 and it's a prime number"
    );
  } else {
    console.log(
      "This number " + n + " is smaller then 12 and it's not a prime number"
    );
  }
} else {
  console.log("This number " + n + " is getter then 12");
}


var n = 0;
var reminder = n % 2;

if (0 == n) {
    console.log(n + " is neutral number!! Not a event or odd");
}
else if (0 == reminder) {
    console.log("This number "+n+" is event");
} else {
    console.log("This number " + n + " is odd");
};

var movie_rating = "r";
var age = 18;
if ("pg" == movie_rating && age >= 13) {
  console.log("You can watch this movie");
} else if ("r" == movie_rating && age >= 18) {
  console.log("You can watch this movie");
} else if ("g" == movie_rating) {
  console.log("You can watch this movie");
} else {
  console.log("You can't watch this movie");
}

var age = 300;
var result;
if (age < 0 || age > 300) {
    result = "Vampire";
} else if (age <= 1) {
    result = "You are baby";
} else if (age <= 3) {
    result = "You are toddler";
} else if (age <= 13) {
    result = "You are kid";
} else if (age < 18) {
    result = "You are teenager";
} else if (age >= 18) {
    result = "You are adult";
} else {
    result = "Invalid age";
}
console.log(result);


var x = 7;
var result;
result = (7 == x) ? "yes" : "No";
console.log(result);