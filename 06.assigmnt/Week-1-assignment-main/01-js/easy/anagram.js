/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
str2="silent"
str1="listen"
function isAnagram(str1, str2) {
  sortedsstr1 = str1.split("").sort().join("");
  sortedsstr2 = str2.split("").sort().join("");
  if(sortedsstr1===sortedsstr2){
  return true    
  }
  return false  
}

console.log(isAnagram(str1, str2))
module.exports = isAnagram;
