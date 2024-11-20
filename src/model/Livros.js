import mongoose from "mongoose";


const livrosSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    titulo: {
        type: String,
    },
    autor: {
        type: String,
    },
    genero: {
        type: String,
    },
    ano: {
        type: String,
    },
});

const Livros = mongoose.model("Livros", livrosSchema);

export default Livros;