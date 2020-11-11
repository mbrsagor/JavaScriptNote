function numList(...names) {
    console.log(names);
}

numList("Sagor", "Nodi", "Khal", "Bill", "Etc");

// Calculator
function calculator(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    console.log(`Total calculate number of result: ${sum}`);
}

calculator(20, 30, 50);


let rest_func = (...users) => {
    console.log(users);
}
console.log("mbrsagor", "ohi", "meg", "dhurbo");