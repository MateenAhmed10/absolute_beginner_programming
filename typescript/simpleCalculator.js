"use strict";
const Calculator = (num1, num2, operator) => {
    let total = 0;
    if (operator == "+") {
        total = num1 + num2;
    }
    else if (operator == "-") {
        total = num1 - num2;
    }
    else if (operator == "*") {
        total = num1 + num2;
    }
    else if (operator == "/") {
        total = num1 / num2;
    }
    else if (operator == "%") {
        total = num1 % num2;
    }
    else {
        total;
    }
    return total;
};
let cal = Calculator(11, 3, "%");
console.log(cal);
