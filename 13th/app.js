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
let remainingCharsElement = document.body.querySelector('#remaining-chars');

inputElement.addEventListener('input', calculateRemainingChars);

function calculateRemainingChars(){
    let userText = inputElement.value;
    let textLength = userText.length;

    let remainingChars = maxAllowedChars - textLength;

    remainingCharsElement.textContent = remainingChars;

    if (remainingChars === 0) {
        remainingCharsElement.classList.add('error');
        inputElement.classList.add('error');
    }

    else if (remainingChars <= 10) {
        remainingCharsElement.classList.add('warning');
        inputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        inputElement.classList.remove('error');
    }

    else{
        remainingCharsElement.classList.remove('warning');
        inputElement.classList.remove('warning');
    }
}