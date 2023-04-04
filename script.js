//Variable declarations. And regexes.

const inputSignsRegex = /([-+\*\/])/g;
const fullOperationRegex= /(\d+(\.\d+)?)([-+\/*])(\d+(\.\d+)?)/;
let firstValue=0;
let secondValue=0;
let operation = "";
let signpos;
let number;

const inputField = document.getElementById("inputField");

const symbolButtons = document.querySelectorAll("button.numbers, button.nondigits");

//To get input from the buttons
symbolButtons.forEach((button) => button.addEventListener("click", 
function () {
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
  inputField.focus();
} ));

//To restrict the input field to only one operation.
inputField.addEventListener("beforeinput", (event)=>{
  let beforesign = event.data;
  console.log("Beforeinput sign: " + beforesign);
  if(fullOperationRegex.test(inputField.value) && inputSignsRegex.test(beforesign)){
    event.preventDefault();
  }
});

//Function to get the input

function getInput(event) {
  number = event.key;
  evaluate ();
}

function evaluate(){

  //To evaluate the full operation.
  if(fullOperationRegex.test(inputField.value)&& number==="Enter"){
    operation = inputField.value.match(inputSignsRegex);
    signpos = inputField.value.search(inputSignsRegex);
    firstValue = parseFloat(inputField.value.slice(0,signpos));
    secondValue = parseFloat(inputField.value.slice(signpos+1));  
    let result= operate(operation[0], firstValue, secondValue);
      inputField.value = result;
      console.log("Value1: " + firstValue);
      console.log("Value2: " + secondValue);
      console.log("Sign: " + operation);
      console.log("Position: " + signpos);
      console.log(" Result: " + result);	
      console.log(typeof operation);
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

