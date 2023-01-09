let firstOperand = '';
let secondOperand = '';
let currentOperator = null;


const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const currentScreen = document.getElementById('currentScreen');
const storedInput = document.getElementById('storedInput');
const decimalButton = document.getElementById('dot');
const clearButton = document.getElementById('clearBtn');
const equalButton = document.getElementById('equal');

clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', calculate);

numberButtons.forEach ((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach ((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
);



function calculate() {
    secondOperand = currentScreen.textContent;
    storedInput.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
    currentScreen.textContent = roundResult(
        operate(currentOperator, firstOperand, secondOperand)
    );
    currentOperator = null;
}

function resetScreen() {
    currentScreen.textContent = '';
};

function clear() {
    currentScreen.textContent = '0';
    storedInput.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
};

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function appendNumber(number) {
    if (currentScreen.textContent === '0') {
        resetScreen()
    };
    currentScreen.textContent += number;
};

function setOperator(operator) {
    if (currentOperator !== null) {
        calculate();
    } else {
        firstOperand = currentScreen.textContent;
        currentOperator = operator;
        storedInput.textContent = `${firstOperand} ${currentOperator}`;
        resetScreen();
    }
}


function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === '/' && a == '0') {
        alert('Halt stop!');
        clear();
    } else if (operator === '/' && b == '0') {
        alert('Halt stop!');
        clear();
    }

    switch (operator) {
        case '+':
          return add(a, b)
        case '-':
          return subtract(a, b)
        case '*':
          return multiply(a, b)
        case '/':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
    }
}