import express from 'express';
import AutorController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)
  .get("/autores/:id", AutorController.listarAutoresId)
  .put("/autores/:id", AutorController.atualizarAutor)
  .post("/autores", AutorController.cadastrarAutor)
  .delete("/autores/:id", AutorController.excluirAutor);

export default router;