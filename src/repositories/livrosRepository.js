import Livros from "../model/Livros.js";

class livrosRepository{
    static async findAll(filtro){
        return await Livros.find(filtro);
    }

    static async findOne(id){
        return await Livros.findById(id);
    }
}

export default livrosRepository;