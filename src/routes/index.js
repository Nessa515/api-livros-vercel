import express from "express";
import livrosController from "../controller/livrosController.js";

const route = express.Router();

route.get("/livros", livrosController.getLivros);
route.post("/livros", livrosController.inserir);
route.get("/livros/:id", livrosController.listarPorId);
route.patch("/livros/:id", livrosController.atualizar);
route.delete("/livros/:id", livrosController.deletar);

export default route;