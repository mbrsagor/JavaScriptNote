function makeFunc() {
    const name = 'Md.Bozlur Rosid Sagor';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
