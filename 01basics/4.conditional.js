
// conditionals are like gates once condition passes the block executes otherwise it passes
var temperature = "24"
// console.log(temperature<20)


// if (temperature <20) {
//     console.log("its gonna be   cold")
    
// }if (temperature<30){
//     console.log("its gonna be normal temperature")
// }




// this program lets user acces content only if he logs in usin anyof 3 methods
let ULF=false
let ULG=false
let ULE=false

if(ULF || ULG || ULE ){
    console.log("you can watch the content")
canuserwatch=true}
else{
    console.log("you cannot watch the content")
    canuserwatch=false
}
userloggedin=true;
creditcard=true;
if(userloggedin && creditcard){
   console.log( "you can buy game")
   ULE=true;
}
else{
    console.log("you cannot buy game")
    ULE=false;
}
// this is just a loop for fun
