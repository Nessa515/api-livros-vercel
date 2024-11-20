import Livros from "../model/Livros.js";

class livrosRepository{
    static async findAll(filtro){
        return await Livros.find(filtro);
    }

    static async create(data){
        return await Livros.create(data);
    }

    static async findById(id){
        return await Livros.findById(id);
    }

    static async update(id, data){
        return await Livros.updateMany({_id: id}, data);
    }

    static async delete(id){
        return await Livros.deleteOne({_id: id});
    }
}

export default livrosRepository;