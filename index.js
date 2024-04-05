const http = require("node:http");
const fs = require("node:fs/promises");

async function writeFile(res, fileName) {
  const file = await fs.readFile(fileName);
  res.write(file);
}

http
  .createServer(async function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    await writeFile(res, "index.html");
    res.end();
  })
  .listen(8080, () => {
    console.log("Started server on port 8080");
  });
