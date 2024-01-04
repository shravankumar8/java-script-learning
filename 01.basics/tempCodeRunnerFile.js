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
divide(45,3);