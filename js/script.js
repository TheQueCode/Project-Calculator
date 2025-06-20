const container = document.querySelector('.container');

const calculator = document.createElement('div');
calculator.className = 'calculator';

const display = document.createElement('input');
display.className = 'display';

const button = document.createElement('button');
button.className = 'button';

container.appendChild(calculator);
calculator.appendChild(display);
calculator.appendChild(button);






function operate (operator, num1, num2) {
  if(operator === '+') add(num1, num2)
  if(operator === '-') subtract(num1, num2)
  if(operator === '*') multiply(num1, num2)
  if(operator === '/') divide(num1, num2)
}

function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}
