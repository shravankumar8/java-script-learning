let objects={
    "first name":"shravan",
    age:18,
}


objects.car="ikea"
objects.care="ikdsea"
console.log(objects)
delete objects.car
delete objects.care

console.log(objects["first name"])