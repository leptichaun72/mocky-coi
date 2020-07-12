const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
    //serve page under
    fs.readFile('public/beginner-react.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
    if (err) return console.log('something bad happen', err)

    console.log(`server is listening on ${PORT}`);
})