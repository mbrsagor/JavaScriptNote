let new_user = [],
item = null, _remove, size;

// add user function
function add_user(user){
   return new_user.push(user);
}

item = add_user('one');
item = add_user('two');
item = add_user('three');
item = add_user('four');
item = add_user('five');

// list of users
function list_of_users() {
    if(new_user.length === 0){
        console.log("No users found");
    }else{
        for(let data=0; data<new_user.length; data++) {
            console.log(new_user[data]);
        }
    }
}

// Number of users
function size_of_users() {
    size = new_user.length;
    console.log('Right now total user is:' ,size);
}

list_of_users();
size_of_users();

console.log('\n');

// remove users function
function remove_users() {
    if(item === null){
        console.log('Sorry!! Already user is empty :)');
    }else{
        _remove= new_user.pop()
        return _remove;
    }
}

remove_users()
list_of_users();
size_of_users();
