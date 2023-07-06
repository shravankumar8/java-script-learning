/*const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(array1.sort(() => {
    //     return 0.5 -Math.random()
// }))
// this programm will shuffel the elements in the array 


cons
ole.log(array1.sort((a,b) => {
    return b-a
}))
console.log(array1[0])
console.log (Math.max.apply(1,array1));


const below5=array1.filter((value,index,number)=>{
    return value<5;
})
console.log(below5)
*/

date1 = new Date();
date1.toISOString();
date2 = date1.getTime();
// console.log(date1);
// console.log(date2);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let txt ="";
array2.forEach(myFunction);
function myFunction(value,index,array){
    txt += value;
}
console.log(txt);
