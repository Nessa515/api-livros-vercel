import Livros from "../model/Livros.js";

class livrosRepository{
    static async findAll(filtro){
        return await Livros.find(filtro);
    }

    static async create(data){
        return await Livros.create(data);
    }

    static async findById(id){
        return await Livros.findOne({_id: id});
    }

    static async update(id, data){
        return await Livros.findByIdAndUpdate(id, data, {new: true});
    }

    static async delete(id){
        return await Livros.deleteOne({_id: id});
    }
}

export default livrosRepository;