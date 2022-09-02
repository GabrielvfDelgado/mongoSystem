import mongoose from 'mongoose';

const autoresSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    idade: { type: Number, required: true }
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autoresSchema);

export default autores;