import Livros from "../model/Livros.js";

class livrosRepository{
    static async findAll(filtro){
        return await Livros.find(filtro);
    }
}

export default livrosRepository;