const hobbies = ['Sports', 'Cooking'];            //배열에 대한 pointer가 저장됨
const age = 22;                                   //값 그 자체가 저장됨

hobbies.push('Reading');                          //배열의 주소는 불변 -> push로 추가할 시 배열이 저장된 주소로 이동해 배열에 추가. hobbies에 저장된 것 = 배열의 주소, push로 추가 = 배열이 저장된 주소로 가 값 추가, 따라서 const지만 저장된 배열 수정 가능 (주소는 그대로이기에)

console.log(hobbies);

//Primitive values: numbers, strings, booleans, ...
//Reference values: Objects (array, function, ...)

const person = {age: 22};

function getAdultYears(p) {
    p.age -= 18;
    return p.age;
}

console.log(getAdultYears(person));
console.log(person);                              //const지만 p.age에 의해 수정된 이유 -> 저장된 주소는 불변. 주소가 가리키는 값이 변경. 수정하지 않으려면 getAdultYears에서 return p.age-18; 만 하면 됨. 또는 console.log(getAdultYears({...person})); 해서 복사본 얻기