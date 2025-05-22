let currentOperator = null;

function setOperator(operator, buttonElement) {
    currentOperator = operator;
    console.log("Operator set to:", currentOperator);

    const allOperators = document.querySelectorAll(".opBtn");
    allOperators.forEach((btn) => btn.classList.remove("active"));
    buttonElement.classList.add("active");
}
