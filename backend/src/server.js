import http from "node:http";

const port = process.env.PORT || 4000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  response.end(
    JSON.stringify({
      message:
        "Base Node.js lista. Recuerda que GitHub Pages no ejecuta este servidor en produccion.",
      path: request.url,
    }),
  );
});

server.listen(port, () => {
  console.log(`Backend base escuchando en http://localhost:${port}`);
});
