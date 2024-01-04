const jsonString = '{"name": "John", "age": 25, "city": "New York"}';
// Parse jsonString into a JavaScript object and log the result
let name = JSON.parse(jsonString);
// console.log(name);
// jsonString.parse()//decodes from json format to objects

const person = {
  name: "Alice",
  age: 30,
  city: "London",
  address: "banjarahills",
  class: "10th",
  clg: "mrcet",
};
let personjson = JSON.stringify(person);
// console.log(personjson)
// Convert the person object into a JSON string and log the result

//3
const book =
  '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925}';
// Parse the book JSON string and log the title and author
book1 = JSON.parse(book);
// console.log(book1)
let bookname = book1.title;
let bookauthor = book1.author;
let bookyear = book1.year;

// console.log("the book name is ", bookname , "the author is ", bookauthor , "and made in the year", bookyear)

//4
let car = '{"brand": "Toyota", "model": "Camry", "year": 2020}';
// Parse the car JSON string, change the year to 2022, and log the modified object
car1 = JSON.parse(car);
car1.brand = "nissan";
car1.model = "procedure";
car1.year = "202330";
// console.log(car1)

//5
const nestedJson =
  '{"person": {"name": "Bob", "age": 28, "address": {"city": "Paris", "country": "France"}}}';
// Parse the nestedJson string and log the person's name, age, and city
let nestedjsonA = JSON.parse(nestedJson);
//console.log("the name is ",nestedjsonA.person.name)
//console.log("the age is ",nestedjsonA.person.age)
//console.log("the city is ",nestedjsonA.person.address.city)
//console.log("country is ",nestedjsonA.person.address.country)

//6
const jsonArray =
  '[{"name": "Tom", "age": 35}, {"name": "Emma", "age": 28}, {"name": "Mike", "age": 40}]';
// Parse the jsonArray string and log the names of all individuals
let jsonarrayA = JSON.parse(jsonArray);
// for(nm in jsonarrayA){
//     console.log(jsonarrayA[nm].name,"age is",jsonarrayA[nm].age);
// }

//7
let fruits = '["apple", "banana", "orange"]';
// Parse the fruits JSON array, add "grape" to it, and log the modified array
fruitsa = JSON.parse(fruits);
fruitsa.push("grape");
//console.log(fruitsa)

//8
const invalidJson = '{"name": "John", "age": 25,}';
// Handle potential errors when parsing invalidJson and log the result or an error message
try {
  let invalidJsonA = JSON.parse(invalidJson);
} catch (error) {
  console.log(error.message);
}

