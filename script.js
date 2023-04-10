//Simple calculator that does one operation at the time. It can take input from keyboard and buttons.

//Variable declarations. And regexes.

const inputSignsRegex = /([-+\*\/])/g;
const fullOperationRegex= /(\d+(\.\d+)?)([-+\/*])(\d+(\.\d+)?)/;
let firstValue=0;
let secondValue=0;
let operation = "";
let signpos;
let number;
let buttonClicked;

const inputField = document.getElementById("inputField");
const symbolButtons = document.querySelectorAll("button.numbers, button.nondigits");

//To prevent cellphone keyboard from popping up in mobile view
function noMobileKeyboard(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    inputField.inputMode = "none";
  }
}

noMobileKeyboard();

//To get input from the buttons
symbolButtons.forEach((button) => button.addEventListener("click", 
function (event) {
  buttonClicked = button.textContent;
  switch(button.id){
    case "equal":
      number = "Enter";
      evaluate ();
      break;  
    case "backspace":
      inputField.value = inputField.value.slice(0, -1);
      break;
    case "clear":
      clearTheField(); 
      break;
    default:
      inputField.value += button.textContent;
  }
  restrictToOne(event);
  inputField.focus();
} ));

//To restrict the input field to only one operation.

inputField.addEventListener("beforeinput", (event) => restrictToOne(event));

//Function to restrict input field to only one operation
function restrictToOne(event){
  if(fullOperationRegex.test(inputField.value) && inputSignsRegex.test(event.data)){
    event.preventDefault();
    alert("Please, only one operation at the time");
  }
  if (event = "click" ){
    if(fullOperationRegex.test(inputField.value) && inputSignsRegex.test(buttonClicked)){
      alert("Please, only one operation at the time");
      inputField.value = inputField.value.slice(0,-1);
    }
  }
}

//Function to get the input from keyboard.

function getInput(event) {
  number = event.key;
  evaluate ();
}

//Function to evaluate the text input field for a full operation

function evaluate(){
  if(fullOperationRegex.test(inputField.value)&& number==="Enter"){
    operation = inputField.value.match(inputSignsRegex);
    signpos = inputField.value.search(inputSignsRegex);
    firstValue = parseFloat(inputField.value.slice(0,signpos));
    secondValue = parseFloat(inputField.value.slice(signpos+1));  
    let result= operate(operation[0], firstValue, secondValue);
    inputField.value = result;
  }
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

//To erase the entire input field.
function clearTheField() {
  inputField.value = "";
  operation = "";
  firstValue=0;
  secondValue=0;
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

