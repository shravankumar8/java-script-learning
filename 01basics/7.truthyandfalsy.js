// if you dont give a value to a varaible its value is null
// faslsy values =undefined,null,0,''.nan
// if we use them as a data type in boolean stuff then these value are considered as false

// opposite to them are true

user=2
if(user=="2"){
    console.log("condition is true ")
}
user=2
if(user==="2"){
    console.log("condition is true ")
}

// when we gave the value of user as "2" the vaue actually considered as 2 number 
// and the conditon got verified this way is called as COERCION   to simply avoid error 
// we use "==="to also compare it with the typeof that