let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstNumber = '';
  document.getElementById('result').value = '';
}

function setOperation(op) {
  if (firstNumber === '') {
    firstNumber = currentInput;
    currentInput = '';
  }
  operator = op;
}

function calculateResult() {
  if (firstNumber !== '' && operator !== '' && currentInput !== '') {
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Error';
        }
        break;
      default:
        result = '';
    }

    document.getElementById('result').value = result;
    currentInput = result;
    firstNumber = '';
    operator = '';
  }
}
