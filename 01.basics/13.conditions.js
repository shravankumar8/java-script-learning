function powers(num,pow){
    return Math.pow(num,pow)
}
//console.log(powers(4,2))

function squareroot(num){
   return Math.sqrt(num)
}
//console.log(squareroot(16))
// even or odd
function evenorodd(num){
    if (num%2 == 0) {
        console.log("even ")
    }else{
        console.log("odd ")
    }
}
function signgues(num){
    if(num>0){
        console.log("positive")
    }else if(num<0){
        console.log("negative")
    }else{
        console.log("0")
    }
}
//evenorodd(5)
signgues(0)
function greater(num1,num2){
    if (num1>num2){
        console.log("greater is ",num1)
    }else{
        console.log("greater is ",num2)
    }
}
// greater(345345,1243)
let datenow = new Date();


function greeting(){
    hour=datenow.getHours();
        if (hour > 6 && hour < 11) {
          console.log("Good Morning sir !");
        } else if (hour > 12 && hour < 14) {
          console.log("Good afternoon sir !");
        } else if (hour > 14 && hour < 16) {
          console.log("hello sir great afternoon!");
        } else if (hour > 16 && hour < 18) {
          console.log("Good  evening sir !");
        } else if (hour > 18 && hour < 22) {
          console.log("Good Night  sir !");
        }else{
            console.log("how was your day going?");
        }
}
// greeting()
// fibonacci
function fibonacci(n){
    let fibo=[0,1]
    for(i=2;i<n;i++){
        fibo[i] = fibo[i-1] + fibo[i-2]

    }
    return fibo
}
console.log(fibonacci(125))

const fruits = "frgr"
// fruits.reverse();
// console.log(fruits)