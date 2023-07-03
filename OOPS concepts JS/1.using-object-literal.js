// defining an Object
let person = {
    first_name: "shravan",
    last_name: "kumar",

    // a function inside an object is called as method
    // method example 
    getfunction: () => {
        return (`the name of the person is ${person.first_name} ${person.last_name}`)
    },
    // object in a object
    phone_number: {
        mobile:"12345",
        landline:"67890"
    }


}
// console.log(person.getfunction())
// console.log(person.phone_number.landline)

//using a constructor 

function personk(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
let person1=new personk("shravan","kumar")
let person2 = new personk("venkate", "ramna")
// console.log("the guy who you are searhching for is " + person1.first_name + person1.last_name)
// console.log("the victim is "+person2.first_name+ person2.last_name)

const code = {
    isStudying: false,
    name:"gan",
    printIntroduction: function () {
        console.log(`my name is ${this.name}.i am stuudying?
        ${this.isStudying}`)
    }

}
const me = Object.create(code)
me.name = "shravan"
me.isStudying = "true"
me.printIntroduction()
code.isStudying=true
code.printIntroduction()