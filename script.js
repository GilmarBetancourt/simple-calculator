<<<<<<< HEAD
const inputAllRegex = /([^0-9=+\.\*/-])/;
const inputSignsRegex = /([=+\.\*/-])/;
let numberArr = [];

const inputField = document.getElementById("inputField");

=======
//Variable declarations. And regexes.

const inputSignsRegex = /([-+\*\/])/;
const fullOperationRegex= /^(\d+(\.\d+)?[-+\/*]\d+(\.\d+)?)/;
let firstValue=0;
let secondValue=0;
let operation = "";
let signpos;

const inputField = document.getElementById("inputField");

//To restrict the input field to only one operation and grab the operation Symbol.

inputField.addEventListener("beforeinput", (event)=>{
  let beforesign = event.data;
  console.log("Beforeinput sign: " + beforesign);
  if(fullOperationRegex.test(inputField.value) && inputSignsRegex.test(beforesign)){
    event.preventDefault();
  } else if(inputSignsRegex.test(beforesign)){
    operation = beforesign;
    signpos = inputField.value.indexOf(operation);
  }
});

>>>>>>> acb630b (Calculator final version.)
//Function to get the input

function getInput(event) {
  let number = event.key;
<<<<<<< HEAD
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
=======

  if(fullOperationRegex.test(inputField.value)&& number==="Enter"){

    firstValue = parseFloat(inputField.value.slice(0,signpos));
    secondValue = parseFloat(inputField.value.slice(signpos+1));
    let result= operate(operation, firstValue, secondValue);
      inputField.value = result;
      console.log("Value1: " + firstValue);
      console.log("Value2: " + secondValue);
      console.log("Sign: " + operation);
      console.log(" Result: " + result);	
  }

  //To erase the entire input field.

  if(number==="Escape"){
    inputField.value = "";
    operation = "";
    firstValue=0;
    secondValue=0;
  }
  
>>>>>>> acb630b (Calculator final version.)
}

inputField.addEventListener("keyup", getInput);

<<<<<<< HEAD
//Function to do the operation goes here
=======
//Function to do the operation.
>>>>>>> acb630b (Calculator final version.)

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

<<<<<<< HEAD
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
=======

>>>>>>> acb630b (Calculator final version.)
