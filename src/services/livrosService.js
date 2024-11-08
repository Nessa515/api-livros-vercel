import livrosRepository from "../repositories/livrosRepository.js";

class livrosService{
    static async findMany(filtro){
        return await livrosRepository.findAll(filtro);
    }
}

export default livrosService;