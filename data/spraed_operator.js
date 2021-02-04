const users = ['sagor', 'ohi', 'apple'];
const all_user = [...users, 'shanto', 'showrove'];

console.log(all_user);

// Inner and outer function
var b = 1;

function outer() {
    var b = 2;

    function inner() {
        b++;
        b = 3;
        console.log(b);
    }

    inner();
}

outer();
