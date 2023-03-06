"use strict";
/*
    Q1: Write a function that takes any whole number of argument
        and loops through it and returns as array of numbers;
*/
const numbersLoop = (n) => {
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    return nums;
};
console.log(numbersLoop(20));
let $2DArr = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
const array2DLoop = (arr2D) => {
    let singleArray = [];
    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {
            singleArray.push(arr2D[i][j]);
        }
    }
    return singleArray;
};
console.log(array2DLoop($2DArr));
/*
    Q3: Write a function that loops through the number
    and finds the x number of even and odd numbers.
*/
const evenOdd = (x) => {
    let nEven = 0;
    let nOdd = 0;
    for (let i = 1; i <= x; i++) {
        if (i % 2 === 0) {
            nEven++;
        }
        else {
            nOdd++;
        }
        ;
    }
    ;
    console.log("Even", nEven, "Odd", nOdd);
};
console.log(evenOdd(105));
