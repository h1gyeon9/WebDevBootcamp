for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['HG', 'YM', 'RR'];

for (const user of users) {        // loop마다 user가 바뀌는데도 let이 아닌 const 써도 되는 이유: 소괄호 안에 있는 조건문도 매 루프마다 실행됨 -> 루프마다 const user 박고 시작
    console.log(user);
}

const loggedInUser = {
    name: 'HG',
    age: 22,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);     // output: name age isAdmin
    console.log(loggedInUser[propertyName]);  // output: HG 22 true
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');