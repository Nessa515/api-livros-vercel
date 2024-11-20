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

    static async inserir(req, res){
        try {
            const {titulo, autor, genero, ano} = req.body;

            if(!titulo || !autor || !genero || !ano){
                return res.status(400).json({message: "É necessário preencher todos os campos"});
            }

            const data = {
                titulo,
                autor,
                genero,
                ano
            };

            const response = await livrosService.inserir(data);
            return res.status(201).json(response);

        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    }

    static async listarPorId(req, res){
        try {
            const {id} = req.params;
            const response = await livrosService.findById(id);
            return res.status(200).json(response);

        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    }

    static async atualizar(req, res){
        try {
            const {id} = req.params;
            const {titulo, autor, genero, ano} = req.body;

            if(!titulo || !autor || !genero || !ano){
                return res.status(400).json({message: "É necessário preencher todos os campos"});
            }

            const data = {
                titulo,
                autor,
                genero,
                ano
            };

            const response = await livrosService.update(id, data);
            return res.status(200).json(response);

        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    }

    static async deletar(req, res){
        try {
            const {id} = req.params;
            const response = await livrosService.delete(id);
            return res.status(200).json(response);

        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    }
}

export default livrosController;