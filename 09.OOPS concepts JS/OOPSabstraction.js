/*abstraction means displaying only essential information and hiding the details .data abstracxtion mrefers to providing only essential information about the data to the outside world hiding the baground details or implementations*/

/*encapsulation is the process of wrapping properties and function within a single unit is known as encapsulation */


// example
class person{
    constructor(name, age) {
        this.name=name
        this.age=age
    }
    add_adress(add) {
        this.add = add;
    }
    getDetails() {
        return (`name is ${this.name} age is :${this.age} adress is ${this.add}`)
        
    }
}
let person1 = new person("shravan", "19");
person1.add_adress("hyderabad")
console.log(person1.getDetails())


let person2 = new person("amnji", 23)
person2.add_adress("guntur")
console.log(person2.getDetails())





