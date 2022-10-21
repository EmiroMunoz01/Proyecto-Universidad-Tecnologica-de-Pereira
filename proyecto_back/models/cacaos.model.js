const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CacaoSchema = new Schema({
  cacao_id: { type: String, required: true, max: 60 },
  nombre: { type: String, required: true, max: 60 },
  descripcion: { type: String, required: true, max: 120 },
  sabor: { type: String, required: true, max: 40 },
  origen: { type: String, required: true, max: 40 },
  peso: { type: String, required: true, max: 40 },
});

module.exports = mongoose.model("cacao", CacaoSchema);
