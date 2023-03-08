// 1. Write a JavaScript program that accept two integers and display the larger

const checkGreaterNum = (num1: number, num2: number): number => {
  let greaterNum: number = 0;
  num1 > num2 ? (greaterNum = num1) : (greaterNum = num2);
  return greaterNum;
};
console.log(checkGreaterNum(16, 10));

// Write a JavaScript conditional statement to find the sign of product of three numbers. Display with the specified sign.
// Sample numbers : 3, -7, 2

const findProductSign = (...num: number[]): string | number => {
  let product: number = 1;
  let sign: string = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      sign = "One of number is - (negative)!";
    }
  }
  return (sign) ? sign : product;
};

console.log(findProductSign(3, -7, 8));
