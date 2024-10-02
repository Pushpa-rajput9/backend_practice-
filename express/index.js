const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(`<h1>Hello World, I am the Queen of this world</h1>`);
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/contact", (req, res) => {
  res.send("contact page");
});
port = 3000;
const hostname = "localhost";
app.listen(port, () => {
  console.log(`server is running at ${hostname}:${port}`);
});
