class Car {
    constructor(name) {
        this.brand = name;
    }

    parent() {
        return 'I have a ' + this.brand;
    }

}

// my_car = new Car("BMW");

// console.log("My car name is: " + my_car.brand);
// console.log(my_car.parent());


class Configuration extends Car {
    constructor(name, model, cc) {
        super(name);
        this.car_model = model;
        this.car_engin_cc = cc;
    }

    get_all() {
        return this.parent() + " Model is " + this.car_model + " Engin CC " + this.car_engin_cc;
    }
}

conficturation = new Configuration("BMW", 2020, "750CC");
console.log(conficturation.get_all());
