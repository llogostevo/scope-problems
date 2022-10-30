/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

// Method 1 for each
// arrow functoin that takes in rest paramater

/*
const arrowRestSum =  (...args) => { 
  // set a total counter
  let total = 0;
  // for each through each element, using arrow function to keep track of the total
  args.forEach((element) => total = total+element);
  return total;
};
*/

// Method 2 reduce
const arrowRestSum =  (...args) => { 
  // use reduce to get total of arguments
  return args.reduce((accumulator, element) => accumulator+element);;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
