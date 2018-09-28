var http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('Hello World');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('fail', err);
    }

    console.log(`sever listening on ${port}`);
})