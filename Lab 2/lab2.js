let currentOperator = null;

function setOperator(operator, buttonElement) {
    currentOperator = operator;
    console.log("Operator set to:", currentOperator);

    const allOperators = document.querySelectorAll(".opBtn");
    allOperators.forEach((btn) => btn.classList.remove("active"));
    buttonElement.classList.add("active");
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2) || !currentOperator) {
        alert("Please enter valid numbers and choose an operator.");
        return;
    }

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
