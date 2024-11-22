import express from "express";
import route from "./routes/index.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import getSwaggerOptions from "./docs/config/head.js";

const app = express();

app.use(express.json());
app.use(route)
app.use(cors({
  origin: "https://api-livros-vercel.vercel.app/", // Permite todas as origens. Substitua por um domínio específico, se necessário.
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Permite métodos HTTP usados pela API.
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos.
}));

app.get("/", (req, res) => {
  res.status(200).redirect("/docs"); // Redirecionando para a rota '/docs' com a barra inicial
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(getSwaggerOptions()), {
    customCssUrl: [
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css"
      ],
      customJsUrl: [
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js",
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js"
      ],
    customSiteTitle: "API Livros", // Personalizando o título da página de documentação
}));


export default app;
