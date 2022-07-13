const numberButtons = document.querySelectorAll('.number');
const controlButtons = document.querySelectorAll('.controls');

const resetButton = document.querySelector('.reset');
const removeButton = document.querySelector('.remove');
const resultButton = document.querySelector('.result');

let currentNumber = document.querySelector('.current-number');
let previousNumber = document.querySelector('.previous-number');

let limitOperation

numberButtons.forEach(numButton => {
    numButton.addEventListener('click', (ev) => {
        let clickedNumber = ev.target;
        updateCurrentNumber(clickedNumber.textContent);
    });
});

controlButtons.forEach(conButton => {
    conButton.addEventListener('click', (ev) => {
        let clickedOperation = ev.target;
        updateCurrentOperation(clickedOperation.textContent);
    });
});

resetButton.addEventListener('click', () => {
    reset();
});

removeButton.addEventListener('click', () => {
    currentNumber.textContent = currentNumber.textContent.substring(0, currentNumber.textContent.length - 1)
});

resultButton.addEventListener('click', () => {
    getResult()
});


/* FUNCTIONS */


function updateCurrentNumber (number) {
    currentNumber.textContent += number;
    limitOperation = true;
}

function updateCurrentOperation(operation) {
    if(limitOperation) {
        previousNumber.textContent += currentNumber.textContent;
        currentNumber.textContent = operation;
        limitOperation = false;
    }
}

function reset() {
    currentNumber.textContent = '';
    previousNumber.textContent = '';
}

function getResult() {
    if(currentNumber.textContent == '+'  || currentNumber.textContent == '-' || currentNumber.textContent == 'x' || currentNumber.textContent == '/') return

    if(currentNumber.textContent != '') {
        let prevNum = previousNumber.textContent;
        let curNum = currentNumber.textContent;

        let joinedStrings = prevNum + curNum;
        let result = eval(joinedStrings);

        currentNumber.textContent = result;
    }

    previousNumber.textContent = '';
}