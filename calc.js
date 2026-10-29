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

const calcDisplay = document.querySelector('#display-value');
const buttons = document.querySelector("button");

let updateOperand1 = (digit) => {
    operand1 += digit.textContent;
    return operand1;
}

let updateOperand2 = (digit) => {
    operand2 += digit.textContent;
    return operand2;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (
            button.textContent == 
             "+" ||
             "-" ||
             "*" ||
             "/"
        ) {
            calcDisplay.textContent += `${ button.textContent }`;
            operator = button.textContent;
        } else if (button.textContent == "C") {
            calcDisplay.textContent = "0";
        } else if (button.textContent == "=") {
            // run operate function by first checking which operation is
            // present in the field and grabbing operands
        }
                
    });
})
