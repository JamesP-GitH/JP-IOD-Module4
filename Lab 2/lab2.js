let currentOperator = null;

function setOperator(operator, buttonElement) {
    currentOperator = operator;
    console.log("Operator set to:", currentOperator);

    const allOperators = document.querySelectorAll(".opBtn");
    allOperators.forEach((btn) => btn.classList.remove("active"));
    buttonElement.classList.add("active");
}

function isValidNumber(value, max = 9999.99) {
    const num = parseFloat(value);
    const decimalPlaces = value.includes(".") ? value.split(".")[1].length : 0;

    return !isNaN(num) && num <= max && decimalPlaces <= 2;
}

function calculate() {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;

    if (!isValidNumber(input1) || !isValidNumber(input2) || !currentOperator) {
        alert("Please enter valid numbers (max 1000, up to 2 decimal places) and select an operator.");
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    let result;

    switch (currentOperator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
    }
    let rounded = Math.round(result * 100) / 100;
    document.getElementById("resultOutput").textContent = rounded;
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("resultOutput").textContent = "?";

    currentOperator = null;

    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach((btn) => btn.classList.remove("active"));
}
