let book = { title: "Simple blog post title" }

function publish(book) {
    book.isPublish = true;
    // book.set("IsPublish", true);
}

publish(book);
console.log(book);
