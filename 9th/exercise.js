// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
let drillingWay = document.body.children[0];

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

//drillingWay = document.body;                    문제를 잘못 이해함. console.dir로 부모, 자매 요소를 해당 변수를 활용해 접근하라는 뜻이었음
//drillingWay = document.body.children[1];
console.dir(drillingWay.parentElement);
console.dir(drillingWay.nextElementSibling);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
let h1Selector = document.getElementById('h1Selector');

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
let fourthMission = document.querySelector('.fourthMission');

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

//fourthMission.replaceChildren('asdf');
fourthMission.textContent = 'This was changed by me!';