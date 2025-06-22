const button = document.querySelectorAll('button');
const display = document.querySelector('input')
const operator = document.querySelectorAll('operator');

button.forEach(item => item.addEventListener('click', appendToDisplay))
operator.forEach(item => item.addEventListener('click', operate))

function appendToDisplay (input) {
  if (input.target.innerHTML === 'Clear') {
    display.value = ''
  } else if (input.target.innerHTML === 'Backspace') {
    display.value = console.log('Backspace - Reminder:tobefixed');
  } else {
    display.value += input.target.innerText
  }
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
