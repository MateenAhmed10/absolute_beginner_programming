// In this syntax '//' you can add single-line comment which is ignored by js.
/*
  In this syntax you can add
  multi-line comments which
  is beneficial to explain your code.
*/

/*
  In computer everything is a data,
  you write something or interact it save somewhere at its database
  in programming you store data in variables which is declared with 'var' and name of variable;
*/

/* 
  You are storing 'string' name data in variable
  declared with 'var' keyword and name of variable is 'name1'
*/
var name1 = "Mateen Bhutto";
console.log(name1);

/* 
  If you want to run code in terminal change the directory from 'abs_prg'
  to 'cd javascript' and in that directory run 'node 1.basics.js'
*/

// Types of Data:
/*
1 - String ('',"",``): anything data inside quotation is string data "Mateen", "10".
2 - Number (0-9, 3.4): any whole number or decimal number is number data.
3 - Boolean (true/false): any variable or data gives either true or false is boolean data.
4 - Undefined (undefined): any variable which is declared but has no data, by default its data is   
undefined.
5 - Null (null): 'null' and 'undefined' are different 'null' is a value you can provide to check if user has not given any input
6 - Array ([]): array data (check '2.arrays.js')
7 - Object ({}): object data (check '4.objects.js')
*/

var profession; // in this we are declaring variable profession and assingning data in next line
profession = "Programmer"; // assigning string data to declared profession variable;
console.log(profession);

var age = 19; // declaring variable 'age' and assigning number data, '=' is called assignment operator which assings number data to variable age.
age = 20; // using this syntax you can change your data of declared variable
console.log(age); // prints number 20
age = "Eighteen"; // re-assigning string data to number 'age' variable;
console.log(age); // prints string "Eighteen";

// variables can be declared with var, let, const;
/*
** There is a problem declaring variable with 'var' is that
  it easily overwrite variable like:

  var country = "Pakistan";
  var country = "Turkey";
  console.log(country)  it would not give error, even we know the country is already declared

**  So for that we use 'let' keyword;
  
  let country = "Pakistan";
  let country = "Turkey";
  console.log(country); it will give you, SyntaxError: Identifier 'country' has already been declared

**  Variables with 'const' are declared when we don't want to change variable data

  
  const country = "Pakistan";
  country = "Turkey";
  console.log(country) it will give you TypeError: Assignment to constant variable.

*/

// the syntax of variable 'userName' is camelCase you can't declare variable with number '1user'
let userName = "Shaheen";
let userAge = 19;
/*
  Using '+' operator you can concat variables to string 
  or append strings with eachother like we did in variable 'userDescp';
*/
let userDescp = "Hi! I'm " + userName + " and my age is " + userAge + ".";
console.log(userDescp);


// Operators (+,-,*,/,%) with numbers;
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
console.log(sum, "'sum with +'");

let numX = 14;
let numY = 5;
let diff = numX - numY;
console.log(diff, "'difference with -'");

let x = 20;
let y = 4;
let product = x * y;
console.log(product, "'product with *'");

let div1 = 10;
let div2 = 2;
let divAns = div1 / div2
console.log(divAns, "'Division with /'");


/*
  With modulus we can check even or odd;
  if (num % 2) = 0  'even'
  if (num % 2) = 1  'odd' 
*/
let mod1 = 20;
let modBy = 3;
let ansMod = mod1 % modBy;
console.log(ansMod, "'Modulus with %'");


// Compound Assignments (+=, -=, *=, /=,) is same as i = i + 1;
let i = 10;
i += 1; // same as i = i + 1; where i is declared as 10 so it becomes 11;
i += 4 // i is 11 from above by adding i = i + 4; it becomes 15;
console.log(i, "'Compound Assingment +'")

let compSub = 10;
compSub -= 5;
console.log(compSub, "'Compound Assingment -'")

let compMulti = 20;
compMulti *= 2;
console.log(compMulti, "'Compound Assingment *'")


let compDiv = 30;
compDiv /= 6;
console.log(compDiv, "'Compound Assingment /'")
