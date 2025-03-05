// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');  //JS에서 객체(Arr, Func, Obj)는 값을 복사하는 게 아닌, 참조를 저장함. (C에서 pointer 느낌으로 이해하면 될듯? 특정 변수에 객체를 저장하면 해당 변수를 통해 객체에 직접적으로 access 할 수 있음.)
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-link');        //querySelector method 사용 시 css selector 사용 가능. 하지만 일치하는 첫번째 요소를 선택. (ex. p a)
anchorElement.href = 'https://academind.com';

anchorElement = document.querySelectorAll('p');                //querySelectorAll 사용 시 일치하는 모든 요소 선택

anchorElement = document.getElementsByClassName('className');  //해당 class의 모든 요소 선택

// element 추가

// 1. new element 생성
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!';

// 2. new element가 들어가야할 parent element에 access
let firstParagraph = document.querySelector('p');

// 3. new element를 parent element content에 삽입
firstParagraph.append(newAnchorElement);