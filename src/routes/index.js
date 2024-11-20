import express from "express";
import livrosController from "../controller/livrosController.js";

const route = express.Router();

route.get("/livros", livrosController.getLivros);
route.post("/livros", livrosController.inserir);

export default route;