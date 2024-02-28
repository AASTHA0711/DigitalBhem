document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('.number, .operator');
    let clearButton = document.getElementById('clear');
    let calculateButton = document.getElementById('calculate');
  
    let currentInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        currentInput += value;
        display.value = currentInput;
      });
    });
  
    calculateButton.addEventListener('click', function () {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = 'Error';
      }
    });
  
    clearButton.addEventListener('click', function () {
      currentInput = '';
      display.value = '';
    });
  });
  