/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// arrow function
const arrowMirrorArray = (array) => {
  const newArray=array;
  // loop from the end of the array
  for (let i=array.length-1; i>=0; i--){
    // push each element onto the end of the new array to create mirror image of position. 
    // each pass the end of the array will increase with the new element
    // as looping downwards it will only mirror image the elements down 
    // i.e. not repeat elements that have been already pushed. 
    newArray.push(array[i]);
  }
  return newArray;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
