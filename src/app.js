import express from "express";
import route from "./routes/index.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from './docs/swagger.json' assert { type: 'json' };

const app = express();

app.use(express.json());
app.use(route)
app.use(cors());
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


export default app;
