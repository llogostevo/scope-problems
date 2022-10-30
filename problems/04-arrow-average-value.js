/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/


//arrow function
const arrowAvgValue = (array) =>{
  // calculate total using reduce method on array
  total = array.reduce((accumulator, element) => accumulator + element);
  // average = total of array elements / number in array
  return total / array.length;

};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
