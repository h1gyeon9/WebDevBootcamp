//const job = {
//    title: 'Developer',
//    location: 'Seoul',
//    salary: 50000
//};

console.log(new Date().toISOString());              //Blueprint 예시

class Job  {                                        //Blueprint는 대문자 시작이 국룰
    constructor(jobTitle, place, salary){ 
        this.title = jobTitle;                      //this: 이걸로 생성된 object
        this.location = place;
        this.salary = salary;
    }

    describe(){
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`);            //method는 constructor 이후에 정의. 변수 사용할 경우 this. 활용
    }
}

const developer = new Job('Developer', 'Seoul', 50000);
const cook = new Job('Cook', 'Busan', 35000);

console.log(developer);
console.log(cook);

developer.describe();
cook.describe();