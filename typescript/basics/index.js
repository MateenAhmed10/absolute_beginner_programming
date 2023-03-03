"use strict";
//                  JavaScript/TypeScript
// add single line comment with '//'
/*
    Add multi-line comments
    with this syntax
*/
/*
    In programming language you need a place
    to store data as same as box for storing things.
    In JavaScript your store data by declaring variable (var)
    and any name of variable in this case (user) and then assign
    data ("Mateen") using assignment operator (=)

    Variable declaration Types: (var, let, const)
*/
var user = "Mateen"; // now user variable has data of string "Mateen";
var user = "Ali"; // ! varible with 'var' can be re-write again (not good practice)
console.log(user);
let userage = 19;
// let userAge = 20; // ! variable with 'let' cannot redeclare again.
console.log(userage);
const dogname = "Safari";
console.log(dogname);
/*
    Differences b\w var, let and const

    var: A variable name declared with 'var' keyword can be redeclare with same variable name
        again as in the 'user' variable above.

    let: A variable name declared with 'let' keyword can not be redclare it will give you
        error (Cannot redeclare block-scoped variable 'userAge'.) Always use 'let' instead of
        'var'.

    const: A variable declared with 'const' keyword is constant you cannot re-assing the data
        to variable declared with const as above dogName
*/
let country; // this is declaration of variable and assigning value on next line
country = "Pakistan"; // assigning data to declared variable country
console.log(country);
/*
                            Data Types:
    1- String: any data assign inside quotations ('',"",``) are string data.
    2- Number: any whole number, decimal number, integers (2.2,2,-5) are number data.
    3- Boolean: boolean only have two values its either true or false.
    4- Undefined: any variable declared but has not been assign any data, so by default it has undefined value.
    5- Null: any variable or data for some reason we want empty we provide null as value.
    6- Objects: Objects are type of data where we can store multiple values in a single variable.
*/
/*
    In JavaScript you just assign data to a variable and can easily
    be overwritten by other data type.

    So in to be safe from that problems we use TypeScript and we can define data
    type explicitly like this countyName: string

    ': string' defining type of data after variable name as below
*/
// String data ': string'
let countryname = "Turkey";
console.log(countryname); // Turkey
// you can easily manipulate or change value of same variable but same data type;
countryname = "China"; // change of data in same variable name
console.log(countryname); // China
// Number data ': number'
// if you hover arrow over variable it shows you data type of assigned value to variable
let wholenumber = 20;
console.log(wholenumber);
let decimalnumber = 20.99;
console.log(decimalnumber);
let integernumber = -2;
console.log(integernumber);
/*
    Variable Names:

    Variables are case sensitive you can not write varible name as 1name, or any name starting with number.

    Use best camelCase pattern for variable names as userage to (userAge), username to (userName) and variables name can start with (_,$).
*/
// Boolean data ': boolean'
/*
    Boolean value always return either true or false when comparing two
    values that we will learn later in operators.
*/
let isPakistani = true;
console.log(isPakistani);
