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
squarepattern(3);
// this pattern basically has two functions a single loop which prints a rwo by number
//the 1st loop prints numbers in a range and it prints the same row by a loop in numbers
