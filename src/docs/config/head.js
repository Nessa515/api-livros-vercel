import * as dotenv from 'dotenv';
import livrosRoutes from "../routes/livros.js";
import livrosSchemas from "../schemas/livros.js";

dotenv.config()


const getServersInCorrectOrder = () => {
    const devUrl = { url: process.env.SWAGGER_DEV_URL || "http://localhost:3000" };
    const prodUrl = { url: process.env.SWAGGER_PROD_URL || "https://api-livros-vercel.vercel.app/" };
  
    if (process.env.NODE_ENV === "production") return [prodUrl, devUrl];
    else return [devUrl, prodUrl];
};

const getSwaggerOptions = () => {
    return {
      swaggerDefinition: {
        openapi: "3.0.0",
        info: {
          title: "API Livros",
          version: "1.0-alpha",
          description: "Api que gerencia livros",
          contact: {
            name: "Vanessa Oliveira",
            email: "vanessaoliveiradasilva515@gmail.com",
          },
        },
        servers: getServersInCorrectOrder(),
        tags: [
          {
            name: "Livros",
            description: "Rota para gestão de livros"
          },
        ],
        paths: {
          //login
          ...livrosRoutes
        },
        components: {
          schemas: {
            ...livrosSchemas
          }
        },
      },
      apis: ["./src/routes/*.js"]
    };
  };

export default getSwaggerOptions