function saySomething() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    // varialbe scope example like if varialbe define let it will not work.
    // Let only for you a spefic block not global.
    console.log(i);
}

// saySomething()

// simple object example
const person = {
    name: 'Mbr-Sagor',
    age: 27,
    address: 'Dhaka, Bangladesh',
    walk() {},
    talk() {},
};
person.talk()
person['name'] = 'Sagor';

console.log(person);

