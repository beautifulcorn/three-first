// 引入http
const http = require("http");
const path = require("path");
const fs = require("fs");

// 创建服务
const server = http.createServer();

// 监听请求事件
server.on("request", (req, res) => {
  console.log(req.url);
  // 根据不同的路径返回不同的静态资源
  let pathName = req.url;
  pathName = pathName === "/" ? "/index.html" : pathName;
  let fileName = path.join(__dirname, "publice", pathName);
  //   每个请求都会伴随着一个这个请求，是浏览器的行为
  if (pathName !== "/favicon.ico") {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.end(err.code);
      } else {
        res.end(data);
      }
    });
  }
});

// 启动服务
server.listen(8080, () => {
  console.log("server is runing at http://127.0.0.1:8080");
});
