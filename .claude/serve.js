// Local preview only: `node .claude/serve.js` → http://localhost:4321
const http = require("http"), fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml",
  ".pdf": "application/pdf", ".json": "application/json", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8" };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  const file = path.normalize(path.join(root, p));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("Not found: " + p); }
    res.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(data);
  });
}).listen(4321, "127.0.0.1", () => console.log("Preview at http://localhost:4321"));
