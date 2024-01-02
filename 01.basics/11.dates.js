let datenow=new Date()
let month=datenow.getUTCMonth()
let day=datenow.getUTCDate()
let year=datenow.getUTCFullYear()
let arr=["jan", "feb", "mar", "apr", "may","jun", "jul","aug", "sep", "okt", "nov", "dec"]
//console.log("the current month we are living in is ",arr[month])
//console.log("the day of the month is ",day)
//console.log("the day of the month is ",year)
//human readable format

// DOB calculator 
const somethign=datenow.toLocaleString()
console.log(somethign)
dob=2024
dobmonth=0
console.log("your fucking age is ",year-dob+month-dobmonth/100*12)