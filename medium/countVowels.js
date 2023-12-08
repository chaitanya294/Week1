/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const mySet = new Set();
mySet.add("a");
mySet.add("e");
mySet.add("i");
mySet.add("o");
mySet.add("u");
function countVowels(str) {
    str = str.toLowerCase();
    let ans = 0;
    for(let i = 0; i<str.length; i++){
      if(mySet.has(str[i]) == true){
        ans++;
      }
    }  
    return ans;
}
module.exports = countVowels;