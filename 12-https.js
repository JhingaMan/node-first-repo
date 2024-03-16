const { debug } = require('console');
const http = require('http');

const server = http.createServer((req,res)=>{  //in createserver we will be passing callback and in call back there are two parameters and each parameter is object. common practice to call parameters are req and res. req reprsents the incoming requests. res represents response, the response is what we are sending off.
if(req.url === '/'){ //if the user requests the home url i.e 
    res.write("Welcome to our page");
    res.end();
    return;
}if(req.url === '/about'){// if the user requests the /about with url response should be this
    res.write('here is the history');
    res.end();
    return;
}
else {
res.end(
    `<h1>oops</h1>
    <p>we cant seem to find the page you are looking for </p>
    <a href='/'>back home</a>`//adding the html to response
    
)
return;
}//ending the response


})

server.listen(5000);