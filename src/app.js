import express from 'express';
import db from './config/dbConnect.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

const livros = [
  { id: 1, "titulo": "Harry Potter e a pedra filosofal" },
  { id: 2, "titulo": "Harry Potter e a camara secreta" }
];

//GETS

app.get('/', (req, res) => {
  res.status(200).send('Livraria');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});


//POSTS

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado');
});

//PUTS

app.put('/livros/:id', (req, res) => {
  const { id } = req.params;
  const index = buscaLivro(id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

//Delete

app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;
  const index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} excluido`);
});


//functions

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id);
}


export default app;