//today we wll learn about spread and rest operator okay firstly let me tell you what are rest and spread operators
// rest is an operator called with ... as usual but when used in a arr

// rest operator exanple


const myarray=["shravan","kumar","devloper","number","string"]

const [firstname,lastname, ...bio]=myarray

console.log(bio)

///////////////////////////////////////////////////////////////////////////////////////////
// function multiply(a, b, c) {
//     return a * b * c;
//   }
  
//   const numbers = [2, 3, 4];
//   console.log(multiply(...numbers)); // Output: 24

function multiple(a,b,c,...t){
    return a*b*c*t;

}
const numbers=[1,2,3,4,5,6,]
console.log(multiple(...numbers))