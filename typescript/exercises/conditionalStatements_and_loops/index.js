"use strict";
// 1. Write a JavaScript program that accept two integers and display the larger
const checkGreaterNum = (num1, num2) => {
    let greaterNum = 0;
    num1 > num2 ? (greaterNum = num1) : (greaterNum = num2);
    return greaterNum;
};
console.log(checkGreaterNum(16, 10));
// Write a JavaScript conditional statement to find the sign of product of three numbers. Display with the specified sign.
// Sample numbers : 3, -7, 2
const findProductSign = (...num) => {
    let product = 1;
    let sign = "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            sign = "One of number is - (negative)!";
        }
    }
    return (sign) ? sign : product;
};
console.log(findProductSign(3, -7, 8));
