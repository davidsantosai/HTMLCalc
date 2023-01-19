var calculator = document.getElementById('calculator');
var calculatorDisplay = document.getElementById('display');

var num1 = "";
var num2 = "";
var operator = "";

calculator.addEventListener('click', calculateValue);

function calculateValue(e) {
  var num = '';
  var target = e.target;
  getFirstNumber(e.target);
  console.log(target.innerText);

  if (target.action === undefined) {
    if (operator !== undefined) {
      if (num2 !== undefined) {
        num2 = e.target.innerText;
      }
      else {
        num2 += e.target.innerText;
      }
    }

    if (num1 !== undefined) {
      num1 = e.target.innerText;
    }
    else {
      num1 += e.target.innerText;
    }

    if (num2 === undefined) {
      num = num1;
    } else {
      num = num2;
    }

  }

  calculatorDisplay.innerHTML = num;

  if (target.action !== undefined) {
    switch (target.action) {
      case 'add':
        calculatorDisplay.innerHTML = '';
        operator = 'add';
        break;
      case 'subtract':
        calculatorDisplay.innerHTML = '';
        operator = 'subtract';
        break;
      case 'multiply':
        calculatorDisplay.innerHTML = '';
        operator = 'multiply';
        break;
      case 'divide':
        calculatorDisplay.innerHTML = '';
        operator = 'divide';
        break;
      case 'calculate':
        if (operator === 'add') {
          calculateSum();
        }
        break;
      default:
        return 0;
    }
  }



}

function getFirstNumber(target) {
  num1 += target.innerText;
  console.log(num1)
}

function calculateSum() {
  calculatorDisplay.innerHTML = num1 + num2;
}

function calculateSubstract() {

}

function calculateMultiply() {

}

function calculateDivide() {

}
