const person={
    fname: 'John',lname:"doe",age:25
}
let text=""
for(let x in person){
    text+=person[x];
}
console.log(text)