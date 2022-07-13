// constructor - properties and methods

class Calculator {
    constructor() {

    }
}

const calculator = new Calculator;

// declare and assign variables

const display = document.getElementById('display');
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

function clearDisplay() {
    number1Display.innerText = null;
    number2Display.innerText = null;
    operatorDisplay.innerText = null;
    number1 = "";
    number2 = "";
    operator = "";
}

numberButtons.forEach((element, i) => element.addEventListener('click', (event) => {
    if (operator === "") {
        number1 += event.target.innerText;
        console.log(number1);
        number1Display.innerText = number1;
    } else {
        number2 += event.target.innerText;
        console.log(number2);
        number2Display.innerText = number2;
    }
}));

operatorButtons.forEach((element, i) => element.addEventListener('click', (event) => {
    operator = event.target.innerText;
    console.log(operator);
    operatorDisplay.innerText = operator;
}));

function solve(n1, n2, operator) {
    switch (operator) {
        case '+':
            add(n1, n2);
            console.log('testing +');
            console.log(number1 + number2);
            break;
        case '-':
            subtract(number1, number2);
            break;
        case 'x':
            multiply(number1, number2);
            break;
        case '/':
            divide(number1, number2);
            break;
        default:
            alert('Enter a valid operation to solve');
    }

}

function add(n1, n2) {
    return n1 + n2;
    console.log(number1 + number2);
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

// numberButtons.forEach((element, i) => element.addEventListener('click', (event) => {
//     number1Display.innerText += event.target.innerText;
//     arrOfNums.push(event.target.innerText);
//     console.log(arrOfNums, i);

//         if (numberButtons.includes(event.target.innerText) === false) {
//             number1 = Number(arrOfNums.join(''));
//             console.log(number1);
//         }
// }));