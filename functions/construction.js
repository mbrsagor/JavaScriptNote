function City(name, population) {
    this.name = name;
    this.population = population;

    this.identify = function () {
        console.log(`The ${this.name} city population is ${this.population}.`);
    }
}

const dhaka = new City('Dhaka', 102020020);
dhaka.identify();


// Factory Functions
function Basketball(name, color) {
    return {
        name: name,
        color: color,
        player: 5
    };
}
const basket_ball = Basketball('Sagor', 'black-white');
console.log(basket_ball);

