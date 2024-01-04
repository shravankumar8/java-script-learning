// function err(){try {
//     conse.log("hello no fucking error")
    
// } catch (error) {
//     console.log("helo fuckin error")
    
// }

//divide by zero 
function divide(a,b){
    try{
        if(b===0){
            throw new Error("nah cannot divide by zero")
        }
        return a/b
    }
    catch(error){
        console.log(error)
    }
}
// console.log(divide(45,0))

// parse integer
function parsent(a){
    try{
        return parseInt(a) 
    }catch(error){
        console.log("error parsing integer",error.message)
        return NaN
    }
}
console.log(parsent(dfd))