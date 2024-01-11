/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
reversestr=str.split("").reverse().join("");
if(str===reversestr){
  return true;
}
return false;

}
str="nan"
str1="madam"
str2="racecar"
str3="fridge"
console.log(`${str1} is a `, isPalindrome(str));
console.log(`${str1} is a `,isPalindrome(str1))
console.log(`${str2} is a `, isPalindrome(str2));
console.log(`${str3} is a `, isPalindrome(str3));
module.exports = isPalindrome;
