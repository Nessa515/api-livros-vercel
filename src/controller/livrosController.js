import livrosService from "../services/livrosService.js";

class livrosController{
    static async getLivros(req, res){
        try {
            
            const {id, titulo, autor, genero, ano} = req.query;

            const filtro = {
                id,
                titulo,
                autor,
                genero,
                ano
            };
            const response = await livrosService.findMany(filtro);
            return res.status(200).json(response);

        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    }
}

export default livrosController;