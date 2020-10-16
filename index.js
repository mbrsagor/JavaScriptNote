const name = "Md.Bozlur Rosid Sagor";
console.log(name);

let something = "I know somethig about....";
console.log(something);

something = "He knows something about ....";
console.log(something);
console.log(something.length);

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
console.log("\n");
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

// How to use class
class Man{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    access() {
        console.log(`Username: ${this.username} and Password: ${this.password}`);
    }
}

const man = new Man('sagor', 'sagor123');
man.access();


class Woman extends Man{
    constructor(username, password, email) {
        super(username, password);
        this.email = email;
    }

    access() {
        console.log(`Email: ${this.email}`);
    }
}

const woman = new Woman('something', 'something123', 'mbrsagor@gmail.com');
woman.access();

// 
const prom = new Promise((resolve, reject) => {
    // Here is async
    setTimeout(() => {
        resolve({ 'title': 'Another new post.', 'content': 'Hello there, I am sagor start-up software developer.', 'author': 'mbr-sagor' });
        reject(new Error('Something went wrong'));
    }, 2000);
});
prom.then(data => {
    console.log(data);
}).catch(err => console.log(err));
