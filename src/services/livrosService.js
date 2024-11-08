import livrosRepository from "../repositories/livrosRepository.js";

class livrosService{
    static async findMany(filtro){
        return await livrosRepository.findAll(filtro);
    }
    
    static async inserir(data){
        return await livrosRepository.create(data);
    }
}

export default livrosService;