const http = require("http");
const port = 3000;

const rotas = {
  '/': 'Pagina inicial',
  '/livros': 'Pagina de livros',
  '/autores': 'Pagina de autores',
  '/editora': 'Pagina editora teste'
};
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`O servidor esta escutando em http://localhost:${port}`);
});