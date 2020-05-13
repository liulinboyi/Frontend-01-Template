const http = require("http");

/**
 * 创建服务
 */
const server = http.createServer((req,res) => {
    console.log("request received");
    console.log(req.headers);
    res.setHeader('Content-Type','text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('hello');
})
// 监听端口
server.listen(8088);
