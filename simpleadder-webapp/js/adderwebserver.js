
const http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./addmod.js");

console.log("Starting server.........")
http.createServer(function(req, res){
    const endpointURL = url.parse(req.url, true);
    const endpointURLFileName = "." + endpointURL.pathname;
    if(endpointURL.pathname == "/add.js"){
        addmod.add(req, res, endpointURL.query);
    } else {
        fs.readFile(endpointURLFileName, function(err, data){
            if(err){
                res.writeHead(404, {"Content-Type": "text/html"});
                return res.end("<h2 style='color:red;'>404 Not Found 2</h2>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);
console.log("Server started successfully. Listening on port 8080");