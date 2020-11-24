// 引入模块
const http = require("http");
const url = require("url");
// 创建服务
const server = http.createServer();

// 监听请求

server.on("request", (req, res) => {
  let { query } = url.parse(req.url, true);
  console.log(query);
});

// 启动服务

server.listen(8080, () => {
  console.log("server is runing at http://127.0.0.1:8080");
});
