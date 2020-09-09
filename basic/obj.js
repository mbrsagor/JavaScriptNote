let post = {}
console.log(post);
post.title = "Hello I'm post title";
console.log(post);

const person = {
    name: "Md.Bozlur Rosid Sagor",
    address: {
        country: "Bangaldesh",
        city: "Gaibandha",
    }
};
console.log(person);
const new_object = Object.assign({}, person, { name: "Mbr Sagor", age:25});
console.log(new_object);

const update = { ...person, name:"Bozlur Rosid"}
console.log(update);
update.address.city = "Dhaka, Uttara";

// print pure person object
console.log(person);
