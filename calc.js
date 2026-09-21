let operand1;
let operand2;
let operator;

const operate = (operator, operand1, operand2) => {
    return operator(operand1, operand2);
};

const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

// create divs for display, digits and operators
const body = document.querySelector("body");

const calcField = document.createElement("div");
calcField.id = "calcField";
body.appendChild(calcField);

const display = document.createElement("div");
display.classList.add("display");
calcField.appendChild(display);

const digits = document.createElement("div");
digits.classList.add("digits")
calcField.appendChild(digits);

const operators = document.createElement("div");
operators.classList.add("operators");
calcField.appendChild(operators);