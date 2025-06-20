const container = document.querySelector('.container');

const calculator = document.createElement('div');
calculator.className = 'calculator';

const display = document.createElement('input');
display.id = 'display';
display.className = 'display';

const buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';

container.appendChild(calculator);
calculator.appendChild(display);
calculator.appendChild(buttonContainer);

for (let i = 0; i < 12; i++){
  const button = document.createElement('button');
  button.innerHTML = `${i + 1}`;
  button.className = `button`;
  button.id = `button${i + 1}`;
  button.addEventListener('click', console.log(button.innerText));
  buttonContainer.appendChild(button);
}


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
