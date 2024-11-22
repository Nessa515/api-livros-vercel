const livrosSchemas = {
    Livro: {
      type: "object",
      properties: {
        id: { type: "string", description: "ID único do livro" },
        titulo: { type: "string", description: "Título do livro" },
        autor: { type: "string", description: "Autor do livro" },
        genero: { type: "string", description: "Gênero do livro" },
        ano: { type: "string", description: "Ano de publicação do livro" },
      },
      example: {
        id: "12345",
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        ano: "1954",
      },
    },
  };
  
export default livrosSchemas;