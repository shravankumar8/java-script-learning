// this is not ternary operaator but this is just to show without using ternary operators
var login = true
if (login !== true || login !== false) {
    console.log("errors");
    login2=false;
}else{
    login2=true;
}



if (login2){
2
    console.log("show signout button")
     signin=true
}else{
    console.log("show signin button")
    signin=false
}
if(login2==false){
    // error message
    return;
}

if (signin){
    console.log("you are logged in already")
}else{
    console.log("you can login now ")
}
/*
// now how can we write the same function using ternary operators?
// using ? and :
// this is more effecient way 
login=false;
login?console.log("you are already logged in ")+console.log("show logout button"):console.log("show login button")+console.log("you can login now");


function login(email, password){
    if(email==null || email.length==0){
        console.log("Please enter your email");
        return false;
    }
    if(password==null || password.length==0){
        console.log("invalid password");
        return false;
    }
    
    // login code 
}


*/