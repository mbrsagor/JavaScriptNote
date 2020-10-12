say_hello = (name) => console.log(`Hello, ${name} how about you?`);
say_hello(`Mbr-Sagor`);

my_name = val => `My name is: ${val}`;
console.log(my_name("Sagor"));

add_calculation = (a, b) => a + b;
let add = add_calculation(30, 20);
console.log(add);

// ([num, num2] = [30, 70]) => console.log(num + num2)
// ({ a, b } = { a: 10, b: 20 }) => a + b;

let sum = (a, b) => a + b;
console.log(sum(20, 80));

about_me = () => {
    const name = `My Name is: Bozlur Rosid Sagor`;
    let age = 25;
    let contact = {
        'address': 'Sector 11, Road#10, House#06, Dhaka-Bangladesh',
        'phone': '+8801773474709',
        'email': 'brshagor.cse@gmail.com'
    }
    let profession = `Full-stack software engineer`;

    let show_all = `Name: ${name}\nAge: ${age}\nContact Infor: ${contact}\nProfession: ${profession}`
    return show_all;
}

const about = about_me();
console.log(about);
