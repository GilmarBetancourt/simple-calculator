const inputAllRegex = /([^0-9=+\.\*/-])/;
const inputSignsRegex = /([=+\.\*/-])/;
let numberArr = [];

const inputField = document.getElementById("inputField");

//Function to get the input

function getInput() {
  const number = inputField.value;

  if (/^\d/.test(number)) {
    numberArr.push(parseInt(number));
    console.log(numberArr.length);
  } else if (inputAllRegex.test(number)) {
    console.log(
      "Your operation must start with a number. Allowed operations are: + - * /"
    );
  }
  if (numberArr.length === 3) {
    let result = operate(numberArr[1], numberArr[0], numberArr[2]);
    console.log(result);
  }
}

inputField.addEventListener("keyup", getInput);

//Function to do the operation goes here

function operate(sign, num1, num2) {
  if (sign === "+") {
    return add(num1, num2);
  } else if (sign === "-") {
    return subtract(num1, num2);
  } else if (sign === "*") {
    return multiply(num1, num2);
  } else if (sign === "/") {
    return divide(num1, num2);
  }
}

//Operations

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

/*
const sum = function (arr) {
  let sum = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  return sum;
};

const multiply = function (arr) {
  let sum = arr.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  });
  return sum;
};
*/
