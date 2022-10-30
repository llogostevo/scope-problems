/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

// attempt 1
/*
const lazyAdder = (number) => {
  let total = number;
return ((secondNum) =>{
  total = total +secondNum;
  return ((thirdNum) =>{
    total = total +thirdNum;
    return total;
  
  })
}); 
};
*/

/* attempt at one big arrow function, not really what is asked for */ 
const lazyAdder = (number) => {return ((secondNum) =>{number = number+secondNum;return ((thirdNum) =>{return number +thirdNum;})});};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
