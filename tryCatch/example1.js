// Example 1
let json = '{"age": 30 }';
let user = JSON.parse(json);

try {
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
} catch (e) {
  console.log("JSON Error: " + e.message);
}

console.log("\n");

// Example 2
try {
  let username = "mbrsagor",
    password = "p12345";
  if (username === "mbrsagor" && password === "p12345") {
    console.log("your login successfully");
  } else {
    throw new Error(`Oops, you didn’t match`);
  }
} catch (e) {
  console.log(e.message);
} finally {
  console.log(`Thanks for try login :)`);
}

console.log("\n");

// Example 3
new Promise((resolve, reject) => reject(false))
  .catch((e) => {
    let num = 20,
      num2 = 330;
    let reuslt = num / num2;
    console.log(reuslt, e);
    return 200;
  })
  .finally((a) => {
    console.log(`Finally ${a}`);
    return 300;
  })
  .then((response) => console.log(response));

// Example 4
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
fetch("http://httpstat.us/500")
  .then(handleErrors)
  .then((response) => console.log("ok"))
  .catch((error) => console.log(error));

// Example 5
const url = "https://jsonplaceholder.typicode.com/posts/";

async function APIwithcatch() {
  try {
    var response = await fetch(url);
    if (!response.ok) throw await response.json();
    console.log(response.json());
  } catch (e) {
    console.log(e);
  }
}

APIwithcatch();
