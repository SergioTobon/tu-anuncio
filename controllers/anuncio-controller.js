import AnuncioService from "../services/anuncio-service.js";

export const createAnuncio = async (req, res)=> {
    try {
        const anuncio = req.body;
        const anuncioService = new AnuncioService();
    
        await anuncioService.createAnuncio(anuncio);
        res.status(201).json({ message: "Anuncio creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

    export const validarAnuncio = async (req, res )=> {
        try {
            const id = req.body;
            const anuncioService = new AnuncioService();
        
            await anuncioService.validarAnuncio(id);
            res.status(200).json({ message: "Anuncio si existe" });
        } catch (error) {
            res.status(500).json({ error: error.message });
            
        }   
};