let currentInput = '';
let result = 0;

function Display(value) {
    currentInput =currentInput+ value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    result = 0;
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentInput = currentInput.replace(/\^/g, '**');
        currentInput = currentInput.replace(/%/g, '/100');
        
        result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
function exponentation() {
    currentInput = currentInput + '^';
    document.getElementById('display').value = currentInput;
}
function percentage(value) {
    currentInput = currentInput + value;
    document.getElementById('display').value = currentInput;
    calculateResult();
}
function removeLastDigit() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}





