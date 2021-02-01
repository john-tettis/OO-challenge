class Vehicle{
    constructor(make,model,year){
        this.make= make;
        this.model = model;
        this.year=year;
    }
    honk(){
        return 'beep'
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels= 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels= 2;
    }
    revEngine(){
        return 'vroom vroom'
    }
}
class Garage{
    constructor(cap){
        this.capacity = cap;
        this.vehicles=[];
    }
    add(car){
        if(this.vehicles.length<this.capacity){
            if(car.make){
                this.vehicles.push(car);
                return 'Vehicle added!';
                }
                return 'Only vehicles allowed in the garage!';
        }
        return 'Garage at max capacity!';
    }
}