/*
    2- Task: Create an Array Manipulation Program

    Breakdown:

•	Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]
•	Use array methods to perform the following manipulations:
o	Append a string to the end of the array
o	Prepend a string to the beginning of the array
o	Remove a string from a specific index in the array and replace it with another string
•	Display the array before and after each manipulation to the user as output.

*/


let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];

// adding item in the end of array
console.log("\n");
console.log("Before .push: ", fruits);
fruits.push("pomegranate");
console.log("After .push: " ,fruits);

// adding item in beginning of array
console.log("\n");
console.log("Before .unshift: ", fruits);
fruits.unshift("mango");
console.log("After .unshift: ", fruits);

// removing item from middle of array
console.log("\n");
console.log("Before .splice: ", fruits);
let removedFruits: string[] = fruits.splice(5,1, "grapes");
console.log("After .splice", fruits);
