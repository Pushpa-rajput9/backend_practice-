// const { log } = require("console");
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(`content-type`, `text/plain`);
  res.end("node server created by Pushpa Rajput");
});
const port = 3000;
const hostName = "localhost";
server.listen(port, () => {
  console.log(`server running at ${hostName}:${port}`);
});
