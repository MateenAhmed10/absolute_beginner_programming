//                  Functions : Write reusable code
/*
    In javascript programmer can write reusable code and divide into reusable parts
    called 'functions()';

    To declare a function you need to give it name of function with function keyword
    and to use it you need to call its name as below
*/

// declaring function with 'function' keyword and providing name of function 'reusableFunction';
// remember you can give any suitable name to your function
function reusableFunction() {
    console.log("Hello from Function");
};

reusableFunction(); // calling or invoking a function with the help of name
// !! Note: without calling a function it would not print "Hello from Function" in console.


// Passing values to function with arguments;

// num1 and num2 are called parameters which stores data inside them as input coming from arguments.
function sumFunct (num1, num2) {
    let sum = num1 + num2;
    console.log(sum, "'Sum from inside of function'");
};

sumFunct(2, 5); // these two numbers inside curley braces are called arguments fromwhere we are passing data to function 


// Return a value from function with 'return' keyword;
function multiple(x, y) {
    let total = x * y; // x and y are multiplied and store in total
    return total; // now the function itself is returning a total value
};

let data = multiple(3, 3); // 'multiple()' is return a value of total so we store it in data variable
console.log(data); // 9



//                      Scope and Functions
//          Scope refers to the visibility of variables
// Global Scope
// Variable which are declared outSide of function's block '{}' have global scope
//  means they can be seen everywhere in javascript code.

let globalScope = "Hello from global scope!";
function checkGlobalScope() {
    console.log("** " + globalScope + " inside function. **");
};
checkGlobalScope();


// Local Scope
// Variables which are declared inside function's block, as well as in function's parameter
// have local scope. This means they are not visible outside of function.

function checkLocalScope() {
    let localScope = "Hi I am local scope :), inside function";
    console.log(localScope);
};

checkLocalScope();
// console.log(localScope): if we call localScope outside of function it shows error;



let car = "Honda";

// Declare variable with same name in global and local,
// the local variable takes precedence over the global variable;
function toCheckOverWrite() {
    let car= "KIA";
    console.log(car);
}
toCheckOverWrite();



// Another way to declare function is with const which is called anonymous function
const difference = function(a, b) {
    return a - b;
};
let subtract = difference(4,3);
console.log(subtract)



// Use Arrow Functions to Write Concise Anonymous Functions
// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

// To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFuncArrow = () => {
  const myVar = "value";
  return myVar;
}
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFuncOneLine = () => "value";
// This code will still return the string value by default.

// Example
const getDateData = () => new Date().toLocaleString();
console.log(getDateData());

// using parameter in arrow function;
const usingParamArrow = (userName, descp) => userName + descp;
let stringConcat = usingParamArrow("Mateen Shahbaz Ahmed Bhutto,", " I am a passionate programmer");
console.log(stringConcat);