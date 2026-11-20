//define query selectors


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
