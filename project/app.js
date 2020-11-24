const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("hello world!");
});

app.get("/html5", (req, res) => {
  res.end("hello 2003!");
});

app.post("/post", (req, res) => {
  res.end("post方式");
});

app.listen(8080, () => {
  console.log("server is runing at http://127.0.0.1:8080");
});
