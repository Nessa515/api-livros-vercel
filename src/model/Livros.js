import mongoose from "mongoose";


const livrosSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
});

const Livros = mongoose.model("Livros", livrosSchema);

export default Livros;