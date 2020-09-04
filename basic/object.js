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

