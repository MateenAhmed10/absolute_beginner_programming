"use strict";
//                  JavaScript/TypeScript operators
/*
    1- Arithmetic Operators: (+,-,*,/,%,**,--,++)
    2- Assignmet Operators: (+=,-=,*=,/=)
    3- Comparison Operators: (==,===,!=,!==,<,>,<=,>=);
    4- Logical Operators: (&&,||,!)
*/
// 1- Arithmetic Operators which are used to perfom math problems
let numSum = 5 + 5; // adding two value 5 + 5 which is 10 and assigning (=) to numSum
console.log(numSum);
// We can also use variable in operators;
let numX = 3;
let numY = 6;
let numZ = numX - numY; // numX (3) - numY (6) and value is (-3);
/*
    We are subtracting the values which are stored in
    numX and numY. After subtracting we get (-3) as value
    stored in numZ.
*/
console.log(numZ); // -3
let num1 = 6;
let ans = num1 * 2; // multiplying 2 to num1 variable
console.log(ans);
let num2 = 9;
let ans1 = num2 / 3; // dividing 3 to num2 (9)
console.log(ans1); // 3
let num3 = 11;
let modulusNum = num3 % 2; // getting remainder of num3 variable
console.log(modulusNum); // 1
let age = 19;
console.log(age); // 19 
age++; // is same as 'age = age + 1' incrementing 1 of age
console.log(age); // 20
age--; // is same as in math 'i = i - 1'
console.log(age);
// Assignment Operators (+=,-=,*=,/=)
/*
    Assignment Operators are called 'Compound Assignment' first perform the operation specified by the operator, then assign the result to the left operand;
*/
let expression1 = 6;
expression1 += 4; // first add 4 to 15 and then assign the value to expression1;
console.log(expression1); // 10
let expression2 = 76;
expression2 -= 6; // first subtract 6 from 76 and then assign the value to expression2;
console.log(expression2); // 70
// Do same with '/', '*' and '%'.
// Assignment Operator in String (+, +=);
let proglanguage = "TypeScript";
console.log(proglanguage + " is amazing!"); /* with plus operator we are concatinating (adding) progLanguage variable value to a string*/
let progName = "Mateen Shahbaz Ahmed ";
progName += "Bhutto"; /*
    As in compound assignment we are first adding "Bhutto" to "Mateen Shahbaz Ahmed" and
    giving new value to progName
*/
console.log(progName);
// we can easily remove + in string using Backticks (``);
let dogName = "Loudos";
let dogDesp = `${dogName}, is so angry!`; /* `${}` you can assing variable in a string using this syntax */
;
// 3- Comparison Operators 
/*
    We learned about Boolean values (true, false) in basics,
    now we will see in comparison operators which always returns
    either true or false
*/
console.log(20 > 10); // returns/give 'true' which is boolean
console.log(85 < 50); // returns 'false' because 85 greater than 50
console.log(12 >= 13); // returns 'false' because 12 is not greater or equal to 13
console.log(80 <= 100); // returns 'true'
console.log(1 == 1); // returns 'true' because 1 is equal 1 
console.log(2 === 2); // returns 'true'
/*
    Difference between == and === is
    == : is equal operator it do not checks data type of comparison
    === : is strictly equal operator checks the data type of value compared;

    != : is not equal
    !==: strictly is not equal

    !! Always use === and !==
*/
let num1Compare = 2;
let num2Compare = 4;
let result = num1Compare !== num2Compare;
console.log(result); // returns true
// Logical Operators:
/*
    Pronouns as:
    1- &&: 'AND' operator checks both operand left and write both should be true.
    2- ||: 'OR' operator check either of the operand should be true.
    3- !: 'Logical Not'
*/
console.log("AND operator:", 20 > 15 && 5 <= 10); /*
    returns 'true' if both left and right operands are true,
    if any of operand is false it returns false.
*/
let percentage = 82;
// Check for A+
console.log(percentage >= 85 && percentage <= 100); // returns false
// Check pass 
console.log("OR operator: ", percentage > 45 || percentage === 45); /*
    || operator returns true if either of operand is ture
*/
console.log(!(percentage < 90)); /*
    ! returns false if its true after (percentage < 90) comparison.
    ! returns true if its false after (percentage < 90) comparison.
*/
console.log(!(percentage < 45)); /*
    ! returns true if its false after (percentage < 90) comparison.
*/
