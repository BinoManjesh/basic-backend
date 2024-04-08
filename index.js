const path = require("path");
const express = require("express");

const app = express();

const serveFile = (fileName) => (req, res) => {
  res.sendFile(path.join(__dirname, fileName));
};

app.get("/", serveFile("index.html"));
app.get("/about", serveFile("about.html"));
app.get("/contact-me", serveFile("contact-me.html"));
app.use(serveFile("404.html"));

app.listen(8000);
