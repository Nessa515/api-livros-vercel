import * as dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});