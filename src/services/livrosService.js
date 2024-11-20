import livrosRepository from "../repositories/livrosRepository.js";

class livrosService{
    static async findMany(filtro){
        return await livrosRepository.findAll(filtro);
    }
    
    static async inserir(data){
        return await livrosRepository.create(data);
    }

    static async findById(id){
        return await livrosRepository.findById(id);
    }

    static async update(id, data){
        return await livrosRepository.update(id, data);
    }

    static async delete(id){
        return await livrosRepository.delete(id);
    }   
}

export default livrosService;