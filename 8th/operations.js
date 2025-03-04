console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4);

console.log(10 + 3 - 5.1 * 10);      // 곱 우선순위 적용

let result = (10 + 3 - 5) * 10;
console.log(result);

result = 10 * 4;
console.log(result);

result = result + 1;
console.log(result);

result += 1;
console.log(result);

result--;
console.log(result);

console.log('마라탕' + ' ' + '먹고싶다');
console.log('abc' - 'ab');        // Output: NaN

let userName = 'asdf';
console.log(userName.length);     // length: 기본 내장 method

let hobbies = ['sports', 'cooking'];
console.log(hobbies.length);      // array 내 element 개수 출력