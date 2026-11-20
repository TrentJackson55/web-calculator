//instantiate queryselectors
const displayValue = document.querySelector("#display-value");
const allClear = document.querySelector("#all-clear");
const equals = document.querySelector("#equals");
const del = document.querySelector("#del");

//define operand and operator variables, operate function
let operand1 = 0;
let operand2 = 0;
let operator = "";
const operate = (operator, op1, op2) => operator(op1, op2);

// define arithmetic functions
const add = (op1, op2) => op1 + op2;
const subtract = (op1, op2) => op1 - op2;
const multiply = (op1, op2) => op1 * op2;
const divide = (op1, op2) => {
    if (op2 <= 0) {
        console.log("Can't divide by zero!")
    } else {
        return op1 / op2;
    }
};
