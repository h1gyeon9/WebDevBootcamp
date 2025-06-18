const fs = require('fs/promises');           //promise

function readFile(){
    let fileData;

//    fileData = fs.readFile('C:/h1gyeon9/100 Days of Code - Web Development Bootcamp/18th/data.txt', function(error, fileData){     //readFileSync가 아님 -> data.txt를 다 읽으면 callback(여기서는 function) 실행 -> Hi there이 먼저 출력
//    if(error){
//      ...
//}
//     console.log('Fileparsing done!');
//        console.log(fileData.toString());
//    });
    
//    console.log('Hi there!');
//}

    fs.readFile('C:/h1gyeon9/100 Days of Code - Web Development Bootcamp/18th/data.txt')
        .then(function(fileData){        //위에 주석처리 한 거랑 동일. 더 구조화된 방식으로 nested callback 작성 가능
            console.log('File parsing done!');
            console.log(fileData.toString());
        })
        .then(function(){})
        .catch(function(error){
            console.log(error);
        });                        //error 처리할 때 catch 가능

    console.log('Hi there!');
}

readFile();