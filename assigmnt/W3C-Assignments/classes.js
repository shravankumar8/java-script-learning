// create a class method named "age "that return car age 

class car{
    constructor(name, year) {
        this.name=name
        this.year=year
    }
    age() {
        const date = new Date();
        return date.getFullYear()-this.year
    }
}

const cars= new car("honda","2004")
console.log(`the name of the car is ${cars.name} and the age is ${cars.age()}`)

const jumbo_cars = new car("hayer", 2015)

console.log(`the name of the car is ${jumbo_cars.name} and the age is ${jumbo_cars.age()}`)
