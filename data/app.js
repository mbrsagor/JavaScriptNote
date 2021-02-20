const javascript = {
    name: 'JavaScript',
    framework: ['Angular.JS', 'Vue.JS', 'React.JS'],
    showAll() {
        this.framework.forEach((a) => {
            console.log(`${a} is a ${this.name} framework.`);
        });
    },
};

javascript.showAll();
console.log(javascript.framework);

// Ternary Operator

const access = true;
const status = access ? 'You are now active user.' : 'You are now deactivated.';
console.log(status);

const age = 10;
const type = age >= 18 ? 'Child' : age < 10 ? 'kind' : 'Yound';
console.log(type);

// Find use case
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.find((val) => val >= 5);
console.log(result);

const result2 = numbers.findIndex((val) => val === 9);
console.log(result2);

const result3 = numbers.filter((val) => val >= 6);
console.log(result3);

console.log('\n');
const result4 = numbers.slice(1, 3);
console.log(result4);

numbers.map((num) => console.log(`This is ${num}`));

// Reduce
const sum = numbers.reduce((prevVal, currentVal) => prevVal + currentVal, 0);

console.log(`Total result is: ${sum}`);
