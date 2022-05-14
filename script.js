const inputAllRegex = /([^0-9=+\.\*/-])/;
const inputSignsRegex = /([=+\.\*/-])/;
let numberArr = [];

const inputField = document.getElementById("inputField");

//Function to get the input

function getInput(event) {
  let number = event.key;
  numberArr.push(number);
  if (/^\d/.test(numberArr[0])) {
    console.log(numberArr.length);
  } else if (inputAllRegex.test(number)) {
    alert(
      "Your operation must start with a number. Allowed operations are: + - * /"
    );
  } //Add an if to erase the input and the array when pressing ESC
  if (numberArr.length >= 3) {
    let result = operate(
      numberArr[1],
      parseInt(numberArr[0]),
      parseInt(numberArr[2])
    );
    console.log(
      "first: " +
        numberArr[0] +
        " sign: " +
        numberArr[1] +
        " second: " +
        numberArr[2] +
        " = " +
        result
    );
    inputField.value = result;
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
