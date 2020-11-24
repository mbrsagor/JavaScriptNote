async function addingNumber(n1, n2) {
  return (await n1) + n2;
}
// console.log(typeof addingNumber(20, 40));
addingNumber(40, 60)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log(`Hellow World`);

// Try catch block
try {
  let username = "sagor",
    email = "sagor@gmail.com";
  if (username === "sagor" && email === "sagor@gmail.com") {
    console.log("Successfully login");
  } else {
    throw new Error(`Sorry your username and password not match`);
  }
} catch (e) {
  console.log(e.message);
} finally {
  console.log(`Thank you for singin our website.`);
}


// Inner function
(function saySomething() {
    console.log(`Hello there, How about you?`);
})();

// with argument
(function SayHello(name) {
    console.log(`Hello, ${name}`);
})('Sagor');
