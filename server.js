var http = require('http');
var parser = require('url');

const port = 3000;

const requestHandler = (req, res) => {
    let url = parser.parse(req.url, true);
    let route = url.pathname;
    console.log(route);
    switch (route){
        case (route.match(/^\/hello\//i) || {}).input:
            let json = {"hello": route.substring(7,route.length)};
            res.end(JSON.stringify(json));
            break;
        default:
            res.end('Not found');
            break;
    }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('fail', err);
    }

    console.log(`sever listening on ${port}`);
})