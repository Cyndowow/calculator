
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const currentScreen = document.getElementById('currentScreen')

numberButtons.forEach ((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (currentScreen.textContent === '0') {
        resetScreen()
    };
    currentScreen.textContent += number;
};

function resetScreen() {
    currentScreen.textContent = '';
}

const add = function(a, b) {
    return a+b;
};

const subtract = function (a, b) {
    return a-b;
};

const multiply = function(a, b) {
    return a*b;
};

const divide = function(a, b) {
    return a/b;
};

const operate = function(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}