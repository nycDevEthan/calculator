// constructor - properties and methods

class Calculator {
    constructor() {

    }
}

const calculator = new Calculator;

// declare and assign variables

let display = document.getElementById('display');
let number1Display = document.getElementById('number1');
let number2Display = document.getElementById('number2');
let operatorDisplay = document.getElementById('operator');
const buttons = Array.from(document.getElementsByClassName('button'));

let number1;
let arrOfNums = [];
let number2;
let operator;
let result;

// for each element in array, adds 'click' event listener on each button, then for each click event runs function

buttons.forEach((element, i) => element.addEventListener('click', (event) => {
    arrOfNums.push(event.target.innerText);
    console.log(arrOfNums, i);

    if (event.target.innerText === '+') {
        return arrOfNums.join('');
    }
}));

// buttons.forEach((element) => element.addEventListener('click', (event) => {
//     if (event.target.innerText === '+') {
//         number1 = number1Display.innerText;
//         clearDisplay();
//         number2Display.innerText = number1;
//         operator = '+';
//         operatorDisplay.innerText = operator;
//         number2 = number2Display.innerText;
//         if (event.target.innerText === "=") {
//             clearAllDisplay();
//             // operatorDisplay.innerText = Number(number1 + number2);
//         }
//     } else if (event.target.innerText === '-') {
//         number1 = number1Display.innerText;
//         clearDisplay();
//         number2Display.innerText = number1;
//         operator = '-';
//         operatorDisplay.innerText = operator;
//         if (event.target.innerText === "=") {
//             sum();
//         }
//     } else if (event.target.class === '/') {
//         number1 = number1Display.innerText;
//         clearDisplay();
//         number2Display.innerText = number1;
//         operator = '/';
//         operatorDisplay.innerText = operator;
//         if (event.target.innerText === "=") {
//             sum();
//         }
//     } else if (event.target.innerText === 'x') {
//         number1 = number1Display.innerText;
//         clearDisplay();
//         number2Display.innerText = number1;
//         operator = 'x';
//         operatorDisplay.innerText = operator;
//         if (event.target.innerText === "=") {
//             sum();
//         }
//     } /* else if (event.target.innerText === '=') {
//         clearDisplay();
//     }*/ else if (event.target.innerText === 'Clear') {
//         clearAllDisplay();
//     } else {
//         number1Display.innerText += event.target.innerText;
//     } 
// }));

// function clearDisplay() {
//     number1Display.innerHTML = null;
// }

// function clearAllDisplay() {
//     number1Display.innerHTML = null;
//     number2Display.innerHTML = null;
//     operatorDisplay.innerHTML = null;
// }

// function sum(n1, n2) {
//     return n1 + n2;
// }

// function addNumberToDisplay() {
//     document.getElementById('display').innerHTML += clickedNumber.innerHTML;
// }

// display value of number button on screen
// append buttons clicked to display value on output
// store in variable
// if operator is clicked, clear display