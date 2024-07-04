let display = document.getElementById('display');
let currentInput = '';
let operationsQueue = [];

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function performOperation(op) {
    if (currentInput !== '') {
        operationsQueue.push(parseFloat(currentInput));
        operationsQueue.push(op);
        currentInput = '';
        display.value = '';
    }
}

function computeResult() {
    if (currentInput !== '') {
        operationsQueue.push(parseFloat(currentInput));
        currentInput = '';
    }

    let result = operationsQueue.shift();
    while (operationsQueue.length > 0) {
        let op = operationsQueue.shift();
        let nextOperand = operationsQueue.shift();

        switch (op) {
            case '+':
                result += nextOperand;
                break;
            case '-':
                result -= nextOperand;
                break;
            case '*':
                result *= nextOperand;
                break;
            case '/':
                result /= nextOperand;
                break;
            default:
                display.value = 'Error';
                return;
        }
    }
    display.value = result;
    operationsQueue = [];
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
    operationsQueue = []
}

function calculateBMI() {
    let height = prompt("Enter your height in meters:");
    let weight = prompt("Enter your weight in kilograms:");
    if (height && weight) {
        let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
        display.value = `BMI: ${bmi.toFixed(2)}`;
    } else {
        display.value = 'Error';
    }
}

function changeMode() {
    document.body.classList.toggle('dark-mode')
    let mode = document.body.classList.contains("dark-mode")
    console.log(mode);
    switch (mode) {
        case false:
            document.getElementById('img').setAttribute("src", "./icons/moon-icon.png")
            break;
        default:
            document.getElementById('img').setAttribute("src", "./icons/light-icon.png")
            return;
    }
}