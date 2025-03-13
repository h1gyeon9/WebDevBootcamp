/*let userText;
let textLength = 0;
let lengthOutput = document.createElement('p')
let inputElement = document.body.querySelector('input');
let divElement = document.body.querySelector('div');


function saveUserText(){
    userText = inputElement.value;
    textLength = userText.length;
    lengthOutput.textContent = textLength + '/60'
}

inputElement.addEventListener('input', saveUserText);

divElement.append(lengthOutput);*/

let inputElement = document.body.querySelector('input');
let maxAllowedChars = inputElement.maxLength;

inputElement.addEventListener('input', calculateRemainingChars);

function calculateRemainingChars(){
    let userText = inputElement.value;
    let textLength = userText.length;

    let remainingChars = maxAllowedChars - textLength;

    document.body.querySelector('#remaining-chars').textContent = remainingChars;

    if (remainingChars<=10) {
        document.querySelector('form').className = 'warning';
    }
}