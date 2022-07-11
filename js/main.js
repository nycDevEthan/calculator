// constructor - properties and methods

class Calculator {
    constructor() {

    }
}

const calculator = new Calculator;

// declare and assign variables

let display = document.getElementById('display');
const numberButtons = Array.from(document.getElementsByClassName('number'));
const operatorButtons = Array.from(document.getElementsByClassName('operator'));
let equalButton = document.getElementById('equals');
let clearButton = document.getElementById('clear');

let previousValue;
let currentValue;
let operator;

// for each element in array, adds 'click' event listener on each button, then for each click event runs function

numberButtons.forEach((element) => element.addEventListener('click', (event) => {
    if (event.target.innerText === 'Clear') {
        clearDisplay();
    } else {
        display.innerText += event.target.innerText;
    }
}));

operatorButtons.forEach((element) => element.addEventListener('click', event => {
    if (event.target.innerText === '+') {
        previousValue = display.innerText;
        clearDisplay();
        // currentValue += event.target.innerText;
    } else if (event.target.innerText === '-') {
        previousValue = display.innerText;
        clearDisplay();
    } else if (event.target.class === '/') {
        previousValue = display.innerText;
        clearDisplay();
        currentValue = display.innerText;
    } else if (event.target.innerText === 'x') {
        previousValue = display.innerText;
        clearDisplay();
    }
}));

clearButton.addEventListener('click', clearDisplay());

function clearDisplay() {
    display.innerHTML = null;
}

// function addNumberToDisplay() {
//     document.getElementById('display').innerHTML += clickedNumber.innerHTML;
// }

// display value of number button on screen
// append numbers clicked to display value on output
// store in variable
// if operator is clicked, clear display

// **special** - when you type in 100 or the result is 100 - play a 100devs Gif