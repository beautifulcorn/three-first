const http = require("http");
const querystring = require("querystring");

http.createServer((req, res) => {
    let data = [];
    req.on("data", (buffer) => {
      data.push(buffer);
    });
    req.on("end", () => {
      let allData = Buffer.concat(data);
      console.log(querystring.parse(allData.toString()));
    });
  })
  .listen(8080, () => {
    console.log("server is runing at http://127.0.0.1:8080");
  });
