const {readFile , writeFile} = require('fs'); //this is the async properties that we will be using 
//to use async properties we basically use callback functions and promises 
//here we outflow the task and the function readfile executes but other code runs as well simulatneously
console.log('start');
readFile('./folder/first.txt','utf8',(err,result)=>{  //here if the file is correctly read the result string is passed into the right argument of the call back function else the left argument of the callback function.
    if(err){
        console.log(err);
        return
    }else{
        const first = result;
        readFile('./folder/second.txt','utf8',(err,result)=>{
            if(err){
                console.log(err);
                return;
            }else{
                const second = result;
                writeFile('./folder/result-async.txt',`here is the result: ${first} and ${second}`,(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }else{
                        console.log('done with the task');
                        return;
                    }
                });
            }
        });    
    }
}); 
console.log('starting with the next task');