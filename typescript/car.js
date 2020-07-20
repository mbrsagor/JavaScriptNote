class Car{

    constructor(public name: String, public price: Number) { }
    
    car_name() {
        console.log(`Car Name: ${this.name}\nCar Price: ${this.price}`)
    }
}

var car = new Car("BMW", 304040);

car.car_name()

