"use strict";
let d = new Date();
function getGreets(person, date) {
    return `Hello! ${person}, I am TypeScript and today is ${date.toLocaleDateString()}.`;
}
let greet = getGreets("Mateen", d);
console.log(greet);
function product(a, b) {
    return a * b;
}
;
console.log(product(2, 2));
