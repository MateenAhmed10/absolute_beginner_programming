"use strict";
//                  Functions
/*
    Functions are reusable code, and you write functions to stop
    writing same code again and again.

    You write function by declaring with function keyword and naming the function

    function functioName() {
        code that need to be executed
    }
    functionName(); when ever you want to  use that function you call it by name
*/
// Now when ever you need hello from typescript, just call name of function
function greetings() {
    console.log("Hello! from TypeScript");
}
greetings(); // Calling name of function
greetings(); // Calling name of function
greetings(); // Calling name of function
// Call as much time as you want to print.
/*
    Now we need to write function of sum,
    so that when ever we need sum of two numbers
    we can call that function and return the sum value
*/
/*
    function sum(parameters): typeOfReturnValue {

    }
    sum(arguments)

    parameters: are place where you declare variable name that can store values coming
                from arguments, they work same as input x and returns output y.
        
    arguments: are place where you pass input data that would store in parameters

    ! Always defined type of parameters because they do not know which input data is coming
        by default its any data type
*/
function sum(num1, num2) {
    return num1 + num2; /* the return keyword returns the value
        to function after calculations, and as it returns value
        you can also store functioName to variable as below shown
    */
}
;
let sumResult = sum(10, 23); // storing return value to variable
console.log(sumResult);
// Now when ever we need sum just call function and pass values
console.log(sum(3, 4));
console.log(sum(5, 4));
// You can also write arrow function storing in a variable;
const product = (num1, num2) => num1 * num2;
console.log(product(4, 5));
/*
    if the code statement is short like above you can user arrow function
    and you do not have to specifiy the return and block {}. The arrow =>
    returns the value.
    If code is bigger you need blocks like below
*/
const difference = (num1, num2) => {
    let sub = num1 - num2;
    return sub;
};
console.log(difference(4, 3));
