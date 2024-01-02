let colors=["black","white","red","green","yellw","orange"]
colors[1]="pink"
//console.log(colors)
//console.log(colors[1])

//console.log(colors.length)
colors.push("magenta","blue")
colors.splice(0,1)
//console.log(colors)
colors2=["purple","peach","mroon","light green"]
colors=colors.concat(colors2)
for(var i=0; i<colors.length; i++){
    if(colors[i]=="magenta"){
        colors[i]="semantis"
    }
    //console.log(colors[i])
}
colorshalf=colors.slice(0,5)
////console.log(colorshalf)


// creating an array that only start with b
let bedcolors=[]
for(let i=0; i<colors.length; i++){
    if(colors[i][0]=='p'){
       
        bedcolors.push(colors[i])
    }
}
console.log(bedcolors)


let lenghtofcolors=[]
for(let i=0; i<colors.length; i++){
    size=colors[i].length
    lenghtofcolors.push(size)
}
console.log(lenghtofcolors)
let count=0
for(let i=0; i<colors.length;i++) {
for(let j=0; j<colors[i].length;j++) {
    count+=1
}
}
console.log(count)