//const { log, error } = require("console");
const http = require("http");
// const { hostname } = require("os");
// const path = require("path");
const options = {
  hostname: "fakestoreapi.com",
  path: "/products/1",
  method: "get",
};
const apiReq = http.request(options, (resApi) => {
  resApi.on("data", (data) => {
    console.log(data.toString());
  });
});
apiReq.on("error", () => {
  console.log(error);
});
apiReq.end();
