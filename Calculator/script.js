let currentInput = '';
let result = 0;

function Display(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    result = 0;
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function removeLastDigit() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}



