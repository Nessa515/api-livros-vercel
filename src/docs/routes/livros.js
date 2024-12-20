import livrosSchemas from "../schemas/livros.js";

const livrosRoutes = {
    "/livros": {
      get: {
        summary: "Listar livros",
        description: "Retorna todos os livros ou permite filtrar por atributos específicos.",
        tags: ["Livros"],
        parameters: [
          {
            name: "id",
            in: "query",
            description: "ID do livro",
            required: false,
            schema: { type: "string" },
          },
          {
            name: "titulo",
            in: "query",
            description: "Título do livro",
            required: false,
            schema: { type: "string" },
          },
          {
            name: "autor",
            in: "query",
            description: "Autor do livro",
            required: false,
            schema: { type: "string" },
          },
          {
            name: "genero",
            in: "query",
            description: "Gênero do livro",
            required: false,
            schema: { type: "string" },
          },
          {
            name: "ano",
            in: "query",
            description: "Ano de publicação do livro",
            required: false,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "Lista de livros encontrada com sucesso",
            content: {
              "application/json": {
                schema: { type: "array", items: { $ref: "#/components/schemas/Livro" } },
              },
            },
          },
          "500": { description: "Erro interno do servidor" },
        },
      },
      post: {
        summary: "Inserir livro",
        description: "Insere um novo livro no sistema.",
        tags: ["Livros"],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/Livro" } },
          },
        },
        responses: {
          "201": {
            description: "Livro criado com sucesso",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Livro" } },
            },
          },
          "400": { description: "Requisição inválida (campos obrigatórios não preenchidos)" },
          "500": { description: "Erro interno do servidor" },
        },
      },
    },
    "/livros/{id}": {
      get: {
        summary: "Buscar livro por ID",
        description: "Retorna um livro com base no ID fornecido.",
        tags: ["Livros"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do livro",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "Livro encontrado com sucesso",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Livro" } },
            },
          },
          "404": { description: "Livro não encontrado" },
          "500": { description: "Erro interno do servidor" },
        },
      },
      put: {
        summary: "Atualizar livro",
        description: "Atualiza os dados de um livro existente.",
        tags: ["Livros"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do livro",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/Livro" } },
          },
        },
        responses: {
          "200": {
            description: "Livro atualizado com sucesso",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Livro" } },
            },
          },
          "400": { description: "Requisição inválida" },
          "404": { description: "Livro não encontrado" },
          "500": { description: "Erro interno do servidor" },
        },
      },
      delete: {
        summary: "Deletar livro",
        description: "Remove um livro com base no ID fornecido.",
        tags: ["Livros"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do livro",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": { description: "Livro deletado com sucesso" },
          "404": { description: "Livro não encontrado" },
          "500": { description: "Erro interno do servidor" },
        },
      },
    },
  };
  
export default livrosRoutes;
  
 