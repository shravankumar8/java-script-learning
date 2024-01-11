function squarepattern(n){
    for(var i=0 ;i<n ;i++){
        subroutine(n)
    }

}
function subroutine(n){
    var str=""
    for (var i=0; i<n; i++){
        str=str+"*"
    }
    console.log(str)
}
// squarepattern(3);
//output
// ***
// ***
// ***

// this pattern basically has two functions a single loop which prints a rwo by number
//the 1st loop prints numbers in a range and it prints the same row by a loop in numbers

// this functions to print a anscending list of stars
function designpar(n){
   for (var i = n; i > 0; i--) {
     element(i)
   }


}
function element(n){
    var str=""
    for(var i=0;i<n;i++){
        str=str+"*"
    }
    console.log(str)
}

// designpar(5);

// *****
// ****
// ***
// **
// *
function partialro(n){
    var str=""
    str=str+"*";
    for(var i=0;i<n-2;i++){
        str=str+" ";
        
    }
    
    str=str+"*";
    console.log(str);
}


function hallowpattern(n){
    element(n)
    for(var i=0;i<n-2;i++){

        partialro(n)
    }

    element(n)
}
// hallowpattern(20)

// right angled pattern

function rowprintter(n){
    var str=''
    for(var i=0; i<=n; i++){
        for(var j=0; j<n-1;j++){
            str=str+' '
        }
        for(var k=1; k<i; k++){
            
            str=str+"*"
        }
        console.log(str)
        str=""
    }
}
rowprintter(5)