const container = document.querySelector('.container');

/*
for (let i = 0; i < 18; i++){
  const button = document.createElement('button');
  button.innerHTML = `${i + 1}`;
  button.className = `button`;
  button.id = `button${i + 1}`;
  button.addEventListener('click', console.log);
  buttonContainer.appendChild(button);
}
*/


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
