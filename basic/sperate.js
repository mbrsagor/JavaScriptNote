let books = ['Python', 'Javascript', 'Dart', 'Swift']
const all = [...books, 'Django', 'Flask', 'Angular.JS', 'Node.JS', 'React.JS']

console.log(all);

let names = {
    name: 'Bozlur Rosid Sagor',
    age: 26,
    address: 'Gaibandha'
}

const new_name = { ...names, 'profession': 'Full-stack software engineer.' };
console.log(new_name);
