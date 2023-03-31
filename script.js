//Variable declarations. And regexes.

const inputSignsRegex = /([-+\*\/])/;
const fullOperationRegex= /^(\d+(\.\d+)?[-+\/*]\d+(\.\d+)?)/;
let firstValue=0;
let secondValue=0;
let operation = "";
let signpos;

const inputField = document.getElementById("inputField");

const symbolButtons = document.querySelectorAll("button.numbers, button.nondigits");

//To get input from the buttons
symbolButtons.forEach((button) => button.addEventListener("click", () => inputField.textContent += button.textContent ));

//To restrict the input field to only one operation and grab the operation Symbol.
//FIX
inputField.addEventListener("beforeinput", (event)=>{
  let beforesign = event.data;
  console.log("Beforeinput sign: " + beforesign);
  if(fullOperationRegex.test(inputField.value) && inputSignsRegex.test(beforesign)){
    event.preventDefault();
  } else if(inputSignsRegex.test(beforesign)){
    operation = beforesign;
    signpos = inputField.value.indexOf(operation);
    console.log("Position: " + signpos);
  }
});

//Function to get the input

function getInput(event) {
  let number = event.key;

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
    clearTheField();
  }
  
}

inputField.addEventListener("keyup", getInput);

//Function to do the operation.

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

function clearTheField() {
  inputField.value = "";
  operation = "";
  firstValue=0;
  secondValue=0;
}

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

