const fs = require('fs');

function readFile(){
    const fileData = fs.readFileSync('data.json');
    console.log('Hi there!');
}

//readFile();                                                  //data.json이 없어 오류 발생 -> 멈춤 -> Hi there 출력 X

function readFileTryCatch(){
    try{                                                       //try-catch: try를 해봄 -> 실패했을 경우에만 catch 실행. 오류 처리할 때 사용
        const fileData = fs.readFileSync('data.json');
    }
    catch{
        console.log('An error occured!!');
    }
    console.log('Hi there!');
}

readFileTryCatch();