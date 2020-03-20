let http = require('http');
let fs = require('fs');


http.createServer(function (request, response) {

    let path = request.url;

    if (path == '/them') {

        fs.readFile('index.html', function (error, data) {

            fs.writeFile('test.txt', 'Hello Node JS', function (error) {
                if (error) {
                    console.log('Ko thanh cong');
                } else {
                    console.log(('thanh cong'));
                }
            });
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        })

    } else if (path == '/sua') {

        fs.readFile('index.html', function (error, data) {

            fs.appendFile('test.txt', 'Hello Node JS Lan 2', function (error) {
                if (error) {
                    console.log('Ko thanh cong');
                } else {
                    console.log(('thanh cong'));
                }
            });

            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        })
    } else if (path == '/xoa') {

        fs.readFile('index.html', function (error, data) {

            fs.unlink('test.txt', function (error) {
                if (error) {
                    console.log('Ko thanh cong');
                } else {
                    console.log(('thanh cong'));
                }
            });
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        })

    } else if (path == '/doc') {

        fs.readFile('index.html', function (error, data) {

            fs.open('test.txt', 'r', function (error, fd) {

                let buffer = new Buffer.alloc(1024);

                fs.read(fd,buffer,0,buffer.length,0,
                    function (err,bytes) {
                    if (bytes > 0){
                     console.log(buffer.slice(0,bytes).toString());
                    }
                })

            })
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        })
    } else if (path == '/test'){
        
    }
}).listen(8080);