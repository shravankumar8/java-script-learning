/* classes are the blue prints of an object . A class can have many objects because the class is a template while objects are instances of the class or the concrete implementation .*/

//defining a class using es6
class student{
    constructor(name, age) {
        this.name=name
        this.age=age
    }
    getdetails() {
       return (`the name of the student  is ${this.name}the age is ${this.age}`)
   }

}

let student1 = new student("shravan", 34);
let student2 = new student("aman", 37);

console.log(student1.name)
console.log(student1.getdetails())

console.log(student2.getdetails())