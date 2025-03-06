let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph clicked!');           // click 한 번 한 이후로는 따로 변하는 게 없지만 click 할 때마다 함수 실행됨. (console 창에서 확인 가능)
}

paragraphElement.addEventListener('click', changeParagraphText);   // 괄호가 있으면 바로 실행됨. click event가 발생했을 때 실행하는 것. 일단 이 함수를 기억하고 해당 event가 발생했을 때 실행되도록 함.

let inputElement = document.body.children[1];
let userText;

function saveUserText(){
    userText = inputElement.value;
    console.log(userText);
}

function saveUserText2(event){                  //eventListener가 실행되면 자동으로 event 객체를 함수에 전달. event.target은 event가 발생한 요소 (여기선 input) 가리킴. 어떤 element에서 이벤트가 발생하든 그 요소의 값을 가져올 수 있음.
    userText = event.target.value;
    console.log(userText);
}

inputElement.addEventListener('input', saveUserText2);