import Livros from "../model/Livros.js";

class livrosRepository{
    static async findAll(filtro){
        return await Livros.find(filtro);
    }

    static async create(data){
        return await Livros.create(data);
    }
}

export default livrosRepository;