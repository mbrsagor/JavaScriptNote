function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;
}

Dog.prototype.brek = function () {
    console.log(`${this.name} says woof`);
}

const dog = new Dog(5, 5.5, 'Suntan');
dog.brek();

Dog.prototype.eat = function () {
    console.log(`${this.name} is like to milk`);
}

const tiger = new Dog(6, 7.0, 'Tiger');
tiger.eat();
// Prototypal Inheritance: Subclasses
/**
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(`${this.name} walks`);
}

function Cat(name) {
    Animal.call(this.name);
    this.lives = 9;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


 */

// Mixins / Extending Object Functionality with Mixins
const duck = {
  hasBill: true,
};
const beaver = {
  hasTail: true,
};
const otter = {
  hasFur: true,
  feet: "webbed",
};

const platypus = Object.assign(duck, beaver, otter);
console.log(platypus);

