/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

/* split the string into an array
reverse the array and then rejoin the array back into a string
this is one arrow function so it doesn't need a return as return is implied. 
*/

let arrowReverseString = str => str.split("").reverse().join("");
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
