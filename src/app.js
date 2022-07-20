import express from 'express';

const app = express();

const livros = [
  { id: 1, "titulo": "Harry Potter e a pedra filosofal" },
  { id: 2, "titulo": "Harry Potter e a camara secreta" }
];


app.get('/', (req, res) => {
  res.status(200).send('Livraria');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});


export default app;