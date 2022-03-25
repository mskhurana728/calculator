const numberButtons = document.querySelectorAll(".btnNumber");
const operationButtons = document.querySelectorAll(".btnOperation");
const allClearButton = document.querySelector(".btn-ac");
const clearButton = document.querySelector(".btn-c");
const equalButton = document.querySelector(".btn-equal");
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");

let currentOperand = "";
let secondOperand = "";
let operator = "";
let operation = "";
let num1 = 0;
let num2 = 0;
let result = 0;



function allClear() {
    display1.textContent = "0";
    display2.textContent = "";
    currentOperand = "";
    secondOperand = "";
    operator = "";
    operation = "";
    num1 = 0;
    num2 = 0;
    result = 0;

}

function append(operand) {

    currentOperand = currentOperand.toString() + operand.toString();
    num1 = Number(currentOperand);
    return currentOperand;
}
function append2(operand) {

    secondOperand = secondOperand.toString() + operand.toString();
    num2 = Number(currentOperand);
    return secondOperand;
}

function display(operand, operation = "", operand2 = "") {
    display1.textContent = operand + " " + operation + " " + operand2;

}

function displayResult(result) {
    display2.textContent = result;
}

function add(num1, num2) {

    return (num1 + num2);

};
function reminder(num1, num2) {
    console.log("Hi reminder here");
    return (num1 % num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
};


function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator == "add") {
        result = add(num1, num2);
    } else if (operator == "subtract") {
        result = subtract(num1, num2);
    } else if (operator == "multiply") {
        result = multiply(num1, num2);
    } else if (operator == "reminder") {
        result = reminder(num1, num2);
    } else if (operator == "divide") {
        result = divide(num1, num2);
    } else {
        result = 0;
    }

    return result;

}


//first there will be one operand on which user would like to perform some action
//then user will select another operand

//now the problem is how to store those operands and to set up 
// operation buttons to their specific operation

//first we have to store first operand in num1 
//when user select an operation than that specific operation should be
//executed
//after choosing operation other operand should store in num2




numberButtons.forEach((numberButton) => {


    numberButton.addEventListener("click", () => {
        if (operation == "") {
            num1 = append(numberButton.textContent);
            console.log(num1);
            display(currentOperand);
        }


    })

});


operationButtons.forEach(operationButton => {

    operationButton.addEventListener("click", () => {
        operation = operationButton.textContent;
        console.log(operation);
        display(currentOperand, operation);
        operator = operationButton.value;
        console.log(operator);
    })

});

numberButtons.forEach(numberButton => {

    numberButton.addEventListener("click", () => {

        if (operation != "") {
            num2 = append2(numberButton.textContent);
            console.log(num2);
            console.log(secondOperand);
            display(currentOperand, operation, secondOperand);
        }
    })
});

equalButton.addEventListener("click", () => {
    console.log(operator, num1, num2);
    result = operate(operator, num1, num2);
    displayResult(result);

});

allClearButton.addEventListener("click", () => {

    allClear();

})
clearButton.addEventListener("click",()=>{
    allClear();
})