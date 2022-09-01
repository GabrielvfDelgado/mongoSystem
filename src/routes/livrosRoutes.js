import express from 'express';
import LivrosController from '../controllers/LivrosController.js';

const router = express.Router();

router
  .get("/livros", LivrosController.listarLivros)
  .get("/livros/:id", LivrosController.listarLivrosId)
  .put("/livros/:id", LivrosController.atualizarLivro)
  .post("/livros", LivrosController.cadastrarLivro);

export default router;