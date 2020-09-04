let data = {
    "id": 1,
    "username": "mbr-sagor",
    "email": "mbrsagor@gmail.com",
    "contact": "01773474709",
    "first_name": "mbr",
    "last_name": "sagor"
}

console.log(data['email']);

// Get full name function
full_name = () => {
    console.log(`Full name: ${data['first_name']}-${data['last_name']}`)
}
full_name();

// Object iteration es6
iterate_data = () => {
    for (const [key, val] of Object.entries(data)) {
        console.log(`${key}:${val}`)
    }
}
iterate_data();

// Update object
let change_username = data.username = "mbrsagor";
let change_first_name = data.first_name = "Md.Bozlur Rosid";
let change_last_name = data.last_name = "Sagor";

console.log(data);
