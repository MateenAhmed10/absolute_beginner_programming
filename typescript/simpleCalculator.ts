const Calculator = (num1: number, num2: number, operator: string) => {
  let total: number = 0;
  if (operator == "+") {
    total = num1 + num2;
  } else if (operator == "-") {
    total = num1 - num2;
  } else if (operator == "*") {
    total = num1 + num2;
  } else if (operator == "/") {
    total = num1 / num2;
  } else if (operator == "%") {
    total = num1 % num2;
  } else {
    total;
  }
  return total;
};

let cal = Calculator(11, 3, "%");
console.log(cal);
