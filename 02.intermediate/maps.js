let mapslearning = new Map();//new Map() initalizes the varible to be a map 

mapslearning.set("1", "str1");//this is the way to set the data in the variable 
mapslearning.set("2", true);//mapslearning{"2":true,}  variable.set(key,value)
mapslearning.set(3, 1);
console.log(typeof mapslearning)//object

console.log(mapslearning.get("1"));//this is the way to get the data from the maps using the value of the key once you mention the value is "1" the value and key associated with the key will be returned
console.log(mapslearning.get("2"));//the same thing with this you will get returned with the key and its value  
console.log(mapslearning.get(3));

console.log(mapslearning.size);//this functions is just like name.length this is tell the lenght of the object how many objects are there in it 
console.log("this is after clear ")
// mapslearning.clear();//this will delete all the elements in the mapped object 
// console.log(mapslearning.get("1"));
// console.log(mapslearning.get("2"));
// console.log(mapslearning.get(3));
// console.log(mapslearning.size);


console.log(mapslearning)//Map(3) { '1' => 'str1', '2' => true, 3 => 1 }
// this is how the data is stored in the maped sections 
mapslearning.delete(3)
console.log(mapslearning)

console.log(mapslearning.has("2"))
console.log(mapslearning.has('2'))
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( mapslearning.get("2")   ); // 'num1'
alert( mapslearning.get('1') ); // 'str1'

alert( mapslearning.size ); // 3
