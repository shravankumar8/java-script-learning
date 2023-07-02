let array1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let trry1=array1.fill(3,5,10)//fill fills the arraywit any element you pass into it ,and 
// console.log(trry1)
//the, number will tell from which index numbers to start filling, last number 
//tells where to end the filling


// filter method

    const newnumb=[23,24,34,45,56,78,89,65]
    const lasnum=newnumb.filter(  (num)=> num != 56)
    // console.log(lasnum)

    const abb=[23,45,67,43,21,44,56,78,65,]
const bbb=abb.filter((num)=> num %2)
// console.log(bbb)

const rcb=[18,19,20,21,22,23,24,25,26]
const csk=rcb.filter((num)=> 8)
console.log(csk)