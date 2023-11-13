class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na');
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, tickctPrice){
        super(name, price);
        this.seat = seat;
        this.tickctPrice = tickctPrice;
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}

const bus = new Bus('sohag', 300000, 50, 300);
console.log(bus);
const vehicle = new Vehicle("kazi");
console.log(vehicle);
vehicle.move();
