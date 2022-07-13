// constructor - properties and methods

class Calculator {
    constructor(number1, number2, operator) {

    }
}

const calculator = new Calculator;

// declare and assign variables

const number1Display = document.getElementById('number1');
const number2Display = document.getElementById('number2');
const operatorDisplay = document.getElementById('operator');
const numberButtons = Array.from(document.getElementsByClassName('button'));
const operatorButtons = Array.from(document.getElementsByClassName('operator'));
const equalsButton = document.getElementById('equals').addEventListener('click', solve); // needs event listener for button click
const clearButton = document.getElementById('clear').addEventListener('click', clearDisplay);

let number1 = "";
let number2 = "";
let operator = "";
let result = 0;

function clearDisplay() {
    number1Display.innerText = null;
    number2Display.innerText = null;
    operatorDisplay.innerText = null;
}

function resetValues() {
    number1 = "";
    number2 = "";
    operator = "";    
}

numberButtons.forEach((element, i) => element.addEventListener('click', (event) => {
    if (operator === "") {
        number1 += event.target.innerText;
        console.log(number1);
        number1Display.innerText = number1 * 1;
    } else {
        number2 += event.target.innerText;
        console.log(number2);
        number2Display.innerText = number2 * 1;
    }
}));

operatorButtons.forEach((element, i) => element.addEventListener('click', (event) => {
    operator = event.target.innerText;
    console.log(operator);
    operatorDisplay.innerText = operator;
}));

function solve() {
    switch (operator) {
        case '+':
            clearDisplay();
            operatorDisplay.innerText = add(number1, number2);
            resetValues();
            break;
        case '-':
            clearDisplay();
            operatorDisplay.innerText = subtract(number1, number2);
            resetValues();
            break;
        case 'x':
            clearDisplay();
            operatorDisplay.innerText = multiply(number1, number2);
            resetValues();
            break;
        case '/':
            clearDisplay();
            operatorDisplay.innerText = divide(number1, number2);
            resetValues();
            break;
        default:
            alert('Enter a valid operation to solve');
    }
}

function add(number1, number2) {
    return ((number1 * 1) + (number2 * 1));
}

function subtract(number1, number2) {
    return ((number1 * 1) - (number2 * 1));
}

function multiply(number1, number2) {
    return ((number1 * 1) * (number2 * 1));
}

function divide(number1, number2) {
    return ((number1 * 1) / (number2 * 1));
}