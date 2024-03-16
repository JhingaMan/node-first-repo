const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
        return;
    }if(req.url === '/about'){
        //Blocking code !!! (for example nested for loop)
        for(let i = 0; i<100;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        //if we will run this another page will not load until the first task is complete, thats why we use asynchronous code.
        res.end('About Page')
        return;
    }
    res.end('Error Page');
    return;
});

server.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})