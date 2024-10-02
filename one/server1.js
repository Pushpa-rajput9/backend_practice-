const http = require("http");
//const { json } = require("stream/consumers");
const server = http.createServer((req, res) => {
  //home page
  //about page
  //product page
  //rest....404 not found
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader(`content-type`, `text/plain`);
    res.end("node server created by Pushpa Rajput");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader(`content-type`, `text/plain`);
    res.end("About Page");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "get",
    };
    const apiReq = http.request(options, (resApi) => {
      resApi.on("data", (data) => {
        //console.log(data.toString());
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.end(data.toString());
      });
    });
    apiReq.on("error", () => {
      console.log(error);
    });
    apiReq.end();
    //hardcode values means you can put values by your self************************
    // res.statusCode = 200;
    // res.setHeader(`content-type`, `application/json`);
    // res.end(JSON.stringify({ produtName: "Product1" }));
  } else {
    res.statusCode = 404;
    res.setHeader(`content-type`, `text/plain`);
    res.end("Page Not Found");
  }
});
const port = 3003;
const hostname = "localhost";
server.listen(port, () => {
  console.log(`server is running at ${hostname}:${port}`);
});
