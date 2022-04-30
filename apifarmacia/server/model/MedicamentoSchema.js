const mongoose = require("mongoose");

const MedicamentoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    laboratorio: { type: String, required: true, unique: true },
    dataHoraCad: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Medicamento", MedicamentoSchema);