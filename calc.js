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
