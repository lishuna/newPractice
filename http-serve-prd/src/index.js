const http = require('http');

class HttpServer {
    constructor() {
        this.port = 3000;
        this.url = '127.0.0.1'
    }
    createServer() {
        http.createServer((req, res) => {
            console.log('hello');
            // 获取请求方法 大写
            const method = req.method;
            // 获取3000之后 #之前的路径
            const url = req.url;
            const version = req.httpVersion;
            console.log(method,url,version);
        }).listen(this.port, this.url, () => {
            console.log('serve start success! http://'+this.url + '/'+this.port)
        })
    }
}

const _http = new HttpServer().createServer();
console.log('test');