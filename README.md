# JavaScript ES6 tutorial

In this topic I will use to visual stdio code(vs-code). First install `node.js` and `NPM`(node package manager) then 
install `vs-code` in 
your 
system
. JavaScript `ES6` features is awesome if you learn the `ES6` you may easily handel `react, VUE, Angular` project.

```javascript
my_bio = () => "A simplest changes make huge difference.";
```

 ##### Install Node on Mac.
 First, install Homebrew.
 ``/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
 
 Then you may follow the command
 ```
 brew update
 brew doctor
 ```
 Next, add Homebrew’s location to your $PATH in your .bash_profile or .zshrc file.
 ```
export PATH="/usr/local/bin:$PATH"
brew install node
npm install -g grunt-cli
```
##### Check the node and NPM version both:
```
npm -v
node -v
```
 
 

###### Features:
- ES6 basic
    - Variable data type
    - Map
    - Filter
    - Conditional Statement
- Special data type
    - Fibonacci
    - Factorial
    - Recursion
    - Stack
    - Queue
    - Link list
    - Binary search

- Loop
    - For loop
    - While loop
    - Do while loop

- Function
    - Old function
    - Arrow function
    - Callback function
    - Promise

- OOP
    - Class
    - Constructor
    - Object 


###### Intro of `filter` method

```javascript
arrayObject.filter(callback, contextObject);
```
The `filter()` method creates a new array with all the elements that pass the test implemented by the `callback()` function.
Internally, the `filter()` method iterates over each element of the array and pass each element to the `callback` function. If the `callback` function returns `true`, it includes the element in the return array.
The `filter()` method accepts two named arguments: a `callback` function and an optional object.
