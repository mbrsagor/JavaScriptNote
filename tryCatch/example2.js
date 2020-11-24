// Example 6
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
let is_valid_json = isValidJSON();
console.log(is_valid_json);
// Here output false

// Example 7 nasted
const nastedStatemenu = () => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
};

console.log(nastedStatemenu());

//  Example 8
const numerator = 100,
  denominator = "a";

try {
  console.log(numerator / denominator);
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
} finally {
  console.log("Finally will execute every time");
}

// Example 9
setTimeout(function () {
  try {
    console.log("I'm here...");
  } catch {
    console.log("error is caught");
  }
}, 3000);

// Example 10
const fetchEmployees = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

console.log(fetchEmployees());
