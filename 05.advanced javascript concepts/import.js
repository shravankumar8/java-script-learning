const User = require("./classinjs");

const shravan = new User("shravan", "kumashravan5@gmail.com")

shravan.enrollcource("webdev","https","mern")

// console.log(shravan.getcourcelist())

console.log(shravan.getinfo())

for (
    i = 0; i < shravan.courcelist[0].length; i++
){ console.log(shravan.courcelist[0][i]) }
