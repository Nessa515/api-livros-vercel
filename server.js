import * as dotenv from 'dotenv';
import app from './src/app.js';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.MONGO_URI;

const port = process.env.PORT || 3000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conectado ao MongoDB Atlas com sucesso!");

        // Inicia o servidor após a conexão com o banco de dados
        app.listen(port, () => {
            console.log(`Servidor rodando na porta http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Erro ao conectar ao MongoDB Atlas:", error);
    });