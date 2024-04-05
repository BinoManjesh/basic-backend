const http = require("node:http");
const fs = require("node:fs/promises");

async function writeFile(res, fileName) {
  const file = await fs.readFile(fileName);
  res.write(file);
}

function getFileName(url) {
  switch (url) {
    case "/":
      return "index.html";
    case "/about":
      return "about.html";
    case "/contact-me":
      return "contact-me.html";
    default:
      return false;
  }
}

http
  .createServer(async function (req, res) {
    let fileName = getFileName(req.url);
    if (fileName) {
      res.writeHead(200, { "Content-type": "text/html" });
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      fileName = "404.html";
    }
    await writeFile(res, fileName);
    res.end();
  })
  .listen(8080, () => {
    console.log("Started server on port 8080");
  });
