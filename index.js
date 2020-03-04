const name = "Md.Bozlur Rosid Sagor";
console.log(name);

let something = "I know somethig about....";
console.log(something);

something = "He knows something about ....";
console.log(something);

/*
Here JavaScript ES6 `const` value not change
But you may `let` value change one more
*/

const username = "mbr-sagor";
const age = 25;

console.log(`Hey there my username is ${username} and my age is ${age}`);

const books = ['Java', 'Python', 'JavaScript'];
books.forEach((book, index) => {
    console.log(`${index}. ${book}`);
})
console.log("=======================");
// map
const bookList = books.map(item => {
    console.log(item)
})
bookList;

// Filter
const bookFilter = books.filter(item => {
    return item === 'Java';
})
console.log(bookFilter);
// Function
function getNews(title, author) {
    return {
        title, author
    };
}
var news = getNews("Learn JavaScript ES6 with mbr-sagor", "Md.Bozlur Rosid Sagor");
console.log(news);
console.log(typeof news);

// Arrow function
const location = (area) => {
    console.log(`Right now I am at ${area}`);
}
location('Dhaka-Bangladesh');

// function add default value
const add = (a=10, b=20) => {
    console.log(a + b);
}
add(3);

// Object
const user = {
    name: "Mbr-Sagor",
    first_name: "Md.Bozlur Rosid",
    last_name: "sagor",
    age: 25,
    study: "CSE",
    sayName: function () {
        console.log(`My Name is ${this.name} age ${this.age} and I am study in ${this.study}`);
        const full_name = () => {
            console.log(`Frist Name: ${this.first_name} and Last Name: ${this.last_name}`);
        };
        full_name();
    },
};
user.sayName();
