function greetUser(greetingPrefix, userName = 'user'){          //greetingPrefix: 기본값 X. 필수, userName: 기본값 'user'. 선택
    //console.log(greetingPrefix + ' Hi there! ' + userName);
    console.log(`${greetingPrefix} ${userName}!`);              //역따옴표: 여러 줄 문자열 가능 (엔터), parameter 편하게 넣을 수 있음 (+ 불필요)
}

greetUser('Hi', 'hg');
greetUser('Hello');

function sumUp(...numbers){                                     //...Rest Parameter: value -> 배열, function 정의할 때 씀
    let result = 0;
    for (const number of numbers){
        result += number;
    }
    return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(...inputNumbers));                           //...Spread Operator: 배열 -> comma로 쪼개진 value 리스트

console.log(sumUp);                                            //함수도 객체. 함수 이름만 호출하면 함수 자체를 참조함. (dir도 가능)

