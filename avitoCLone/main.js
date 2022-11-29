const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  let htmlFilePath = __dirname + "/index.html";
  let cssFilePath = __dirname + "/public/css/style.css";
  let jsFilePath = __dirname + "/index.js";
  //html
  fs.readFile(htmlFilePath, (err, data) => {
    if (err) console.log(err);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data, "utf-8");
    res.end();
  });
  //css
  fs.readFile(cssFilePath, (err, data) => {
    if (err) console.log(err);
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(data);
    res.end();
  });
  //js
  fs.readFile(jsFilePath, (err, data) => {
    if (err) console.log(err);
    res.writeHead(200, { "Content-Type": "text/js" });
    res.write(data);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
