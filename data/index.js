let book = { title: "Simple blog post title" }

function publish(book) {
    book.isPublish = false;
}

publish(book);
console.log(book);

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.lastIndexOf('duck'))
console.log(beasts.sort());
console.log(beasts.reverse());
