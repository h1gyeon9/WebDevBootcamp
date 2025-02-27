/*let greetingText, int;
greetingText = 'Hello, world!';
int = 123;
alert(greetingText);
alert(int);
greetingText = 'asdf';
alert(greetingText);*/


let age = 22;
let userName = 'HG';

let hobbies = ['Sports', 'Cooking', 'Reading', 1, 2];
alert(hobbies);           /* Output: Sports,Cooking,Reading,1,2 */
alert(hobbies[0]);        /* Output: Sports */

let job = {
    title: 'Developer',
    place: 'Seoul',
    salary: 99999
};
alert(job.title);         /* Output: Developer */

let adultYears;

adultYears = age - 18;
console.log(adultYears);

function calculateAdultYears(userAge) {
    return userAge - 18;
}

let totalAdultYears = calculateAdultYears(100);
console.log(totalAdultYears);

let person = {
    name: 'Brown',            // Property
    greet(){                  // Method
        console.log('Hello!');
    }
};

person.greet();