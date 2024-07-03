var firstNumber = "";
var secondNumber ="";
var operator = "";


function press(number){
  firstNumber += number;
  updateDisplay(firstNumber);
}

function setOP(op){
  if(firstNumber === "")
    return;
  if(secondNumber !== ""){
    calculate();
}
operator = op;
secondNumber = firstNumber;
firstNumber ="";
}



function calculate(){
  if(firstNumber === "" || secondNumber === "")
    return;

  var result;
  var num1 = parseFloat(secondNumber);
  var num2 = parseFloat(firstNumber);

  switch(operator) {
    case '+':
      result= num1 + num2;;

      break;
    case '-':
      result= num1 - num2;
      break;
    case '*':
      result= num1 * num2;
      break;

    case '/':
      result= num1 / num2;
      break;
    
    default:
      result = "Invalid operator";
  }
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  updateDisplay(firstNumber);
}

function clr(){
  firstNumber ="";
  secondNumber ="";
  operator = "";
  updateDisplay("0");
  

}

function updateDisplay(input){
  var displayDiv = document.querySelector("#display");
  displayDiv.innerText = input;

}
