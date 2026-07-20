const { createServer } = require("node:http");
const { createReadStream, existsSync, statSync } = require("node:fs");
const { extname, join, normalize, resolve, sep } = require("node:path");

const root = resolve(__dirname, "..", "dist");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4173);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const isInsideRoot = (filePath) => {
  const relativePath = normalize(filePath).replace(root, "");
  return relativePath === "" || relativePath.startsWith(sep);
};

const sendFile = (response, filePath) => {
  response.writeHead(200, {
    "content-type": types[extname(filePath)] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
};

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || "/", `http://${host}`).pathname);
  const requestedPath = resolve(root, `.${pathname}`);
  const filePath =
    isInsideRoot(requestedPath) && existsSync(requestedPath) && statSync(requestedPath).isFile()
      ? requestedPath
      : join(root, "index.html");

  sendFile(response, filePath);
}).listen(port, host, () => {
  console.log(`Local preview running at http://${host}:${port}`);
});
