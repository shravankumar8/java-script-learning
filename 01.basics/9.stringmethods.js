let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;//returns the lenght
let text2 = "Apple, Banana, Kiwi";
let part = text2.substring(7);//returns the letters from index 7 to 13
// console.log(part)//Banana


//replace method()
let text3 = "Please            visit Microsoft!";
let newText = text3.trimStart()
let text4 = "5";
console.log(text4.padStart(9, " "));
var i=12

while( i>0 ){
    i--
    
    
    console.log(text4.padStart(i, " "), text4.padStart(i+1*2, " "));
}