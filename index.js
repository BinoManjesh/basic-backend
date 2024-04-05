const http = require("node:http");
const fs = require("node:fs/promises");

http
  .createServer(async function (req, res) {
    res.writeHead(200);
    res.end();
  })
  .listen(8080, () => {
    console.log("Started server on port 8080");
  });
