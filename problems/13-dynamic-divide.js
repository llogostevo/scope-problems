/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:

const halfer = dynamicDivide(2); // returns a function
halfer(20); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10


***********************************************************************/

// dynamic divide v1

let dynamicDivide_v1 = (divisor) =>{
  return ( (argument) =>{
    return argument/divisor;
  })};

// dynamic divide v2 simplified
// divisor is the 1st argument, then from this you can create new functions
// each new function allows you to create your own divisor functions 
  let dynamicDivide = divisor =>argument =>argument/divisor;

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = dynamicDivide;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
