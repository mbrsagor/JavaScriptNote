// Example 1
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words);

const result = words.filter(word => word.length < 6)
console.log(result);

// Example 2
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = cities.filter(city => city.population >3000000);
console.log(bigCities);

