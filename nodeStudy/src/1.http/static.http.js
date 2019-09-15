const http = require('http');

const server = http.createServer();

server.listen(3000,()=>{
    console.log('服务启动成功！');
});